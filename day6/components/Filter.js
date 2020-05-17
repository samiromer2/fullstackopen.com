import React from 'react'

const Filter  = ({ fiterAll , setFiterAll }) => {
	const handleFilterChange = (event) =>	setFiterAll(event.target.value)

  return (
    <div>
	  filter shown with <input value={fiterAll}
   onChange={handleFilterChange}
  />
	  </div>
  )
}

export default Filter
