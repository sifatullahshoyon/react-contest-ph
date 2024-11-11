import React, { createContext, useContext, useState } from 'react';

// Create a context to share the toggle state
const ToggleContext = createContext();

const Toggle = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <ToggleContext.Provider value={{ isOn, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default Toggle;
