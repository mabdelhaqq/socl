import Logo from "./components/Logo/Logo"
import Search from "./components/Search/Search"
import Toolbar from "./components/Toolbar/Toolbar"
import "./Header.scss";

const Header = () => {
  return (
    <header className="mainheader row">
        <div className="col-2"><Logo /></div>
        <div className="col-3"><Search /></div>
        <div className="col-7"><Toolbar /></div>
    </header>
  )
}

export default Header