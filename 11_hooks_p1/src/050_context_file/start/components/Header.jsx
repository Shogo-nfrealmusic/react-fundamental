import { useContext } from "react";
import { ThemeContext } from "../Example";
const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const THEMES = ["light", "dark", "red"];
  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((color) => {
        return (
          <label>
            <input
              type="radio"
              key={color}
              value={color}
              checked={theme === color}
              onChange={changeTheme}
            />
            {color}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
