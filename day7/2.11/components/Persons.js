import React from 'react'
import Person from './Person'

const Persons    = ({ person , fiterAll }) => {
	
	const personsToShow = (fiterAll === '') ? person : person.filter(person1 => person1.name.toLowerCase().includes(fiterAll.toLowerCase()) )
  return (
  <table>
   <tbody> 
	<tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
    
       {personsToShow.map((person) =>
         <Person key={person.id} person={person} />
       )}
     </tbody>
		
	</table>
  )
}
export default Persons