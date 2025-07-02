import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [telegramId, setTelegramId] = useState('dev-mode-id');

  useEffect(() => {
    let id = 'dev-mode-id';
    try {
      if (window.Telegram) {
        id = window.Telegram.WebApp.initDataUnsafe?.user?.id || 'dev-mode-id';
      }
    } catch (err) {
      console.error('Failed to read telegramId', err);
    }

    setTelegramId(id);

    fetch('/api/user-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify({ telegramId: id })
    }).catch(err => console.error('user-auth failed', err));
  }, []);

  console.log('Current telegramId:', telegramId);

  return <Dashboard telegramId={telegramId} />;
}

export default App;
