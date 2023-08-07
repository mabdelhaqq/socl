import Logo from "./components/Logo/Logo"
import Search from "./components/Search/Search"
import Toolbar from "./components/Toolbar/Toolbar"
import "../../../assets/styles/Header/Header.scss"

const Header = () => {
  return (
    <header className="mainheader">
        <Logo />
        <Search />
        <Toolbar />
    </header>
  )
}

export default Header