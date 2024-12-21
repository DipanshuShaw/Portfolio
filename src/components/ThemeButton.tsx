import { useEffect, useState } from "react";
import { MdOutlineLightMode , MdOutlineDarkMode } from "react-icons/md";

const ThemeToggleButton: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
  
    // Apply the theme class to the body
    useEffect(() => {
      const body = document.body;
      if (isDarkMode) {
        body.classList.add("dark");
        body.classList.remove("light");
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
      }
    }, [isDarkMode]);
  
    const toggleTheme = () => {
      setIsDarkMode((prev) => !prev);
    };
  
    return (
      <button
      onClick={toggleTheme}
      className="relative inline-flex mx-4 overflow-hidden text-xl rounded-2xl p-[1px]">
      {isDarkMode ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}
    </button>
    );
  };
  
  export default ThemeToggleButton;