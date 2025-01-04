import { useEffect, useState } from "react";
import { IconBrightnessUp, IconMoon } from '@tabler/icons-react';


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
      className="">
      {isDarkMode ? <IconBrightnessUp stroke={1.5} className="inline h-8 mx-4 w-8" /> : <IconMoon stroke={1.5} className="inline h-8 mx-4 w-8" />}
    </button>
  );
};

export default ThemeToggleButton;