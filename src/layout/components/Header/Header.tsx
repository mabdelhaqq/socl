import Logo from "./components/Logo"
import Search from "./components/Search"
import Toolbar from "./components/Toolbar"
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