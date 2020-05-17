import React from 'react'

const PersonForm   = ({ newName , setNewName , newPhone , setNewPhone , persons ,setPersons }) => {
	
	const handleNameChange = (event) => setNewName(event.target.value)
	const handlePhoneChange = (event) => setNewPhone(event.target.value)
	const addPerson = (event) => {
    event.preventDefault()
    const copy =  persons
    const result = copy.find( ({ name }) => name === newName );

//this is the 2nd route
if (result === undefined)
  {
    const personObject = {
      name: newName,
      date: new Date().toISOString(),
      number:newPhone ,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
  }
else
  window.alert(newName + ' is already added to phonebook')

//here is the route of the message

  setNewName('')
  setNewPhone('')
}
	
	
  return (
  
   <form onSubmit={addPerson}>
   <table>
   <tbody>
	    <tr><td>name:</td><td><input value={newName}
		 onChange={handleNameChange}
		/></td></tr>
    <tr><td>
    number:</td><td><input value={newPhone}
   onChange={handlePhoneChange}
  /></td></tr>
  <tr><td></td><td>
	   <button type="submit">Add</button>
	   </td></tr>
</tbody>	
	</table>
	  </form>
	   
  )
}

export default PersonForm
