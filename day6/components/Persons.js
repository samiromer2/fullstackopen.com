import React from 'react'
import Person from './Person'

const Persons    = ({ person , fiterAll }) => {
	
	const personsToShow = (fiterAll === '') ? person : person.filter(person1 => person1.name.toLowerCase().includes(fiterAll.toLowerCase()) )
  return (
  <table>
   
    
       {personsToShow.map((person) =>
         <Person key={person.id} person={person} />
       )}
    
		
	</table>
  )
}
export default Persons
