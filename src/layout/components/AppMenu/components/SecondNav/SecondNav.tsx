import img1 from "../../../../../assets/images/fi.png"
import img2 from "../../../../../assets/images/gr.png"
import img3 from "../../../../../assets/images/ui.png"
import img4 from "../../../../../assets/images/web.png"
import "./SecondNav.scss"
const SecondNav = () => {
  return (
    <nav className='links2'>
        <div className='itemlink'>
            <img src={img1} alt="img1" className="imgitem"/>
            <span className='titlelinks'>Fashion Design</span>
        </div>
        <div className='itemlink'>
            <img src={img2} alt="img2" className="imgitem"/>
            <span className='titlelinks'>Graphic Desgin</span>
        </div>
        <div className='itemlink'>
            <img src={img3} alt="img3" className="imgitem"/>
            <span className='titlelinks'>UI/UX Community</span>
        </div>
        <div className='itemlink'>
            <img src={img4} alt="img4" className="imgitem"/>
            <span className='titlelinks'>Web Designer</span>
        </div>
    </nav>
  )
}

export default SecondNav