import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',date: '2019-05-30T17:30:31.098Z', number: '040-123456' ,id:1 },
    { name: 'Ada Lovelace',date: '2019-05-29T18:39:34.091Z', number: '39-44-5323523',id:2 },
    { name: 'Dan Abramov', date: '2019-05-28T19:20:14.298Z',number: '12-43-234345',id:3 },
    { name: 'Mary Poppendieck',date: '2019-05-27T19:20:14.298Z' ,number: '39-23-6423122',id:4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [fiterAll, setFiterAll] = useState('')


  return (
    <div>
      <h2>Phonebook</h2>
	  
	  <Filter fiterAll={fiterAll} setFiterAll = {setFiterAll}  />
    <h2>Add a new</h2>
	
	<PersonForm newName={newName} setNewName = {setNewName} 
	newPhone={newPhone} setNewPhone = {setNewPhone} 
	persons = {persons} setPersons= {setPersons}
	/>
 
     <h2>Numbers</h2>
     
	 <Persons person={persons} fiterAll={fiterAll}  />
	 
    </div>
  )
}

export default App
