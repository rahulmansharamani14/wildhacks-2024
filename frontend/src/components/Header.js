// Header component
import logo from '../img/logo.png';
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <h1>X-Fundraiser App</h1>
    </header>
  );
};

export default Header;