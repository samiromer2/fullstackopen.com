import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [fiterAll, setFiterAll] = useState('')

const hook = () => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
}

useEffect(hook, [])


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
