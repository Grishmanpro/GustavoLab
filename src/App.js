import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [telegramId, setTelegramId] = useState(() => {
    try {
      const storedId = localStorage.getItem('telegramId');
      if (storedId) return storedId;
      const apiId = window?.Telegram?.WebApp?.initDataUnsafe?.user?.id;
      return apiId || 'dev-telegram-id';
    } catch (err) {
      console.error('Failed to obtain telegramId', err);
      return 'dev-telegram-id';
    }
  });

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

  return <Dashboard telegramId={telegramId} />;
}

export default App;
