import React from 'react'
import Person from './components/Person/Person'
import "./People.scss"
const People = () => {
  return (
    <div className='peoplecontainer'>
      <Person url="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=p"
      name= "Alex Guerrero"/>
      <Person url="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=q"
      name= "Sara Mendoza"/>
      <Person url="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=w"
      name= "Ronald Roocets"/>
      <Person url="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=e"
      name= "Nancy Lee"/>
      <Person url="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=r"
      name= "Maria Jackson"/>

    </div>
  )
}

export default People