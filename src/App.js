import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const telegramAvailable = window.Telegram && window.Telegram.WebApp;

  const [telegramId, setTelegramId] = useState(() =>
    localStorage.getItem('telegramId') ||
    (telegramAvailable
      ? window.Telegram.WebApp.initDataUnsafe?.user?.id
      : 'dev-mode-id') ||
    ''
  );

  useEffect(() => {
    if (!telegramId) return;
    localStorage.setItem('telegramId', telegramId);
    fetch('/api/user-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify({ telegramId })
    });
  }, [telegramId]);

  if (!telegramAvailable) {
    return <div>Please open this app inside Telegram.</div>;
  }

  return <Dashboard telegramId={telegramId} />;
}

export default App;
