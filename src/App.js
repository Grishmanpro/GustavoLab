import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [telegramId, setTelegramId] = useState(() =>
    localStorage.getItem('telegramId') ||
    window.Telegram?.WebApp?.initDataUnsafe?.user?.id || ''
  );

  useEffect(() => {
    if (!telegramId) return;
    localStorage.setItem('telegramId', telegramId);
    fetch('/api/user-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ telegramId })
    });
  }, [telegramId]);

  return <Dashboard telegramId={telegramId} />;
}

export default App;
