import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useTheme();
  const THEMES = ["light", "dark", "red"];
  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((color) => {
        return (
          <label key={color}>
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
