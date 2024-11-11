const ToggleMessage = () => {
    const { isOn } = useContext(ToggleContext);
  
    return (
      <p>{isOn ? 'The toggle is ON' : 'The toggle is OFF'}</p>
    );
  };
  
  export { ToggleMessage };
  