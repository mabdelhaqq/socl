import React from 'react'
import Person from './Person'
import "./People.scss"

const peopleData = [
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=p',
    name: 'Alex Guerrero',
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=q',
    name: 'Sara Mendoza',
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=w',
    name: 'Ronald Roocets',
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=e',
    name: 'Nancy Lee',
  },
  {
    url: 'https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=r',
    name: 'Maria Jackson',
  },
];

const People = () => {
  return (
    <div className='people-container'>
      {peopleData.map((person, index) => (
        <Person key={index} url={person.url} name={person.name} />
      ))}
    </div>
  );
};

export default People