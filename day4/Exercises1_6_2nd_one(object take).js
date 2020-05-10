import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const History = (props) => {
  if ((props.allClicks[0] === 0) &&
	  (props.allClicks[1] === 0) &&
	  (props.allClicks[2] === 0) &&
	  (props.allClicks[3] === 0) &&
	  (props.allClicks[4] === 0) &&
	  (props.allClicks[5] === 0) )
	  {
    return (
      <div>
        the app is used to get votes 
      </div>
    )
  }
// button press history: {props.allClicks.join(' ')}
  return (
    <div>
	{/*add the comment here to see*/}
	  <br/>
	  <h2>Anecdote with most votes</h2>
	  
	  {props.listofanecdotes[props.winvotedone]}  
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
 
  const [votes, setvotes] = useState({
    0: 0, 
    1: 0, 
    2: 0, 
    3: 0, 
    4: 0, 
    5: 0 
  })
  const handle0Vote = () => {

	const copy = { ...votes }
	copy[selected] += 1
    setvotes(copy)
  }
  

//empty();
 console.log(votes[0])
  if ((votes[0] !== 0) ||
	  (votes[1] !== 0) ||
	  (votes[2] !== 0) ||
	  (votes[3] !== 0) ||
	  (votes[4] !== 0) ||
	  (votes[5] !== 0) )
	  {
		  
 
var max = 0
for( var i = 0; i < 6; i++)
{
	if (max < votes[i] )
	{
		var loc = i;
		max = votes[i]		
	}
}
 
  }
  
  const setToValue = () => () => { 

   var newValue = Math.floor((Math.random() * 6) );
  setSelected(newValue) 
  }
  
 
 const Button = ({ onClick, text }) => ( <button onClick={onClick}> {text} </button>)
 
  return (
  
  <>
    <div>
	<h2>Anecdote of the day</h2>	
	<br/>
      {props.anecdotes[selected]}  	
	 
	 
	 <div>
	  
	 <button onClick={handle0Vote}>Vote</button> 	
	  <Button onClick={setToValue()} text='next anecdote' />
	  	  
	  <History allClicks={votes} listofanecdotes = {props.anecdotes} winvotedone = {loc}/>
	</div>
    </div>
	</>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
