import React from 'react'
import SearchBox from './component/SearchBox/SearchBox'
import People from './component/People/People'
import "../../../assets/styles/SideBar/SideBar.scss"

const SideBar = () => {
  return (
    <aside className='friendmenu'>
        <SearchBox />
        <p className='paside'>FRIENDS</p>
        <People />
    </aside>
  )
}

export default SideBar