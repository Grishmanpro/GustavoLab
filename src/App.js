import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  let telegramId = 'dev-mode-id';
  try {
    if (window.Telegram) {
      telegramId = window.Telegram.WebApp.initDataUnsafe?.user?.id || 'dev-mode-id';
    }
  } catch (err) {
    console.error('Failed to read telegramId', err);
  }

  console.log('Current telegramId:', telegramId);

  return <Dashboard telegramId={telegramId} />;
}

export default App;
