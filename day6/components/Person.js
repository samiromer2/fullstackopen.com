import React from 'react'

const Person = ({ person }) => {
  return (
    <tbody> 
	<tr>
	<td>Name</td>
	<td>Phone</td>
	</tr>
	<tr><td>
	{person.name}
</td>    
	<td> {person.number} </td></tr>
	 
	 </tbody>
  )
}

export default Person
