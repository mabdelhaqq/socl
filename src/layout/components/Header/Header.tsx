import Logo from "./components/Logo"
import Search from "./components/Search"
import Toolbar from "./components/Toolbar"
import "./Header.scss";


const Header = () => {
  return (
    <header className="main-header row">
        <div className="col-2"><Logo /></div>
        <div className="col-4"><Search /></div>
        <div className="col-6"><Toolbar /></div>
    </header>
  )
}

export default Header