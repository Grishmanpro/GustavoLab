const express = require('express');
const app = express();
app.use(express.json());

// In-memory sample data
const users = {};
const videos = {
  // telegramId: [ { id, title, views, earnings, date } ]
};
const payments = {
  // telegramId: [ { id, date, method, amount, status } ]
};

app.post('/api/user-auth', (req, res) => {
  const { telegramId } = req.body;
  if (!telegramId) return res.status(400).json({ error: 'telegramId required' });
  if (!users[telegramId]) {
    users[telegramId] = { id: telegramId };
    videos[telegramId] = [
      { id: 1, campaign: 'ReBet', link: 'Instagram', views: 676800, cpm: 0.3, earnings: 203.03, status: 'Botted', date: 'Jun 23, 2025' }
    ];
    payments[telegramId] = [
      { id: 1, date: 'Jun 30, 2025', method: 'Wire Transfer', amount: -607.15, status: 'Awaiting Approval' }
    ];
  }
  res.json({ success: true });
});

app.get('/api/user/videos', (req, res) => {
  const telegramId = req.query.telegramId;
  res.json(videos[telegramId] || []);
});

app.get('/api/payments', (req, res) => {
  const telegramId = req.query.telegramId;
  res.json(payments[telegramId] || []);
});

app.get('/api/admin/users', (req, res) => {
  const telegramId = req.query.telegramId;
  if (telegramId !== '123456789') return res.status(403).json({ error: 'Forbidden' });
  res.json(Object.keys(users).map(id => ({ id, videos: videos[id] })));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
