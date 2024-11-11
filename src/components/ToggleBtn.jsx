import { useContext } from "react";
import Toggle from "./Toogle";

const ToggleButton = () => {
    const { isOn, toggle } = useContext(Toggle);
  
    return (
      <button onClick={toggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    );
  };
  
  export { ToggleButton };
  