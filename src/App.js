import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const DEFAULT_ID = 'dev-mode-id';
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem('userId') || DEFAULT_ID;
  });

  useEffect(() => {
    const stored = localStorage.getItem('userId');
    const id = stored || DEFAULT_ID;
    if (!stored) {
      localStorage.setItem('userId', id);
    }
    setUserId(id);

    fetch('/api/user-auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      // Backend still expects the field name 'telegramId'
      body: JSON.stringify({ telegramId: id })
    }).catch(err => console.error('user-auth failed', err));
  }, []);

  return <Dashboard userId={userId} />;
}

export default App;
