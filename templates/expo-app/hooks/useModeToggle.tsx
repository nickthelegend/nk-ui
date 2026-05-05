import React, { createContext, useContext, useState } from 'react';

const ModeContext = createContext({
  mode: 'dark',
  toggleMode: () => {},
});

export const useModeToggle = () => useContext(ModeContext);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
