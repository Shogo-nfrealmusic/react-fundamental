import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const [, setTheme] = useTheme();

  return (
    <Footer>
      <div>Footer</div>
    </Footer>
  );
};

export default Footer;
