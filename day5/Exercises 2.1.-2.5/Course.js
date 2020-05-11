import React from 'react'
import Header from './Header'

const Course = ({ course }) => {
//console.log(course.parts)
	const total = course.parts.reduce((tally, current) => tally + current.exercises, 0)
	let parexearrray = course.parts.map((part, i) => 
    <p key={i}>
      {part.name} {part.exercises}
    </p> )
  return (
  <div>
  <Header headername = {course.name} />
   
   {parexearrray}
   <p>Number of exercises {total}</p>
   
   </div>
  )
}

export default Course
