import React from 'react'
import FirstNav from './components/FirstNav/FirstNav'
import SecondNav from './components/SecondNav/SecondNav'
import "../../../assets/styles/AppMenu/AppMenu.scss"

const AppMenu = () => {
  return (
    <aside className='appmenu'>
        <FirstNav />
        <p className='pmenu'>PAGES YOU LIKE</p>
        <SecondNav />
    </aside>
  )
}

export default AppMenu