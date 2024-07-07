import { useState } from "react";
import "./Example.css";

const Example = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (e) => setTheme(e.target.value);

  const THEMES = ["light", "dark", "red"];

  return (
    <>
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
      <main className={`content-${theme}`}>
        <h1>テーマの切り替え</h1>
      </main>
    </>
  );
};

export default Example;
