import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({text,value}) => {
 let sign = ''
 if (text === 'positive' )
	 sign = ' %'
  return(
    <div>
      <tr>
	  <td>
	  {text}
	  </td>
	  <td>
	
	  {value}
	  {sign} 
	  </td>
	  </tr>
      
    </div>
  )
}


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
		<Statistics text ='good' value = {props.good} />
		<Statistics text ='bad' value = {props.bad} />
		<Statistics text ='neutral' value = {props.neutral} />
		<Statistics text ='all' value = {props.allClicks.length} />
		<Statistics text ='average' value = {props.average} />
		<Statistics text ='positive' value = {props.positivepercent} />
		
		</table>
  )
}

const Button = ({ onClick, text }) => ( 
 <button onClick={onClick}>    
 {text}  
 </button>)
 
const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  let  average = 0   
  let positiveArr = [];
  let positivepercent = 0
 // let negativeArr = [];
  
   if (allClicks.length > 0) {
   average = allClicks.reduce( (accumulator, currentValue)=> accumulator + currentValue);
   
 positiveArr = allClicks.filter((elem) => elem > 0);
 positivepercent = (positiveArr.length/allClicks.length)*100;

// negativeArr = allClicks.filter((elem) => elem = -1);
      
   }
  

  const handleLeftClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }
  
    const handlenewClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
	  <h1>give feedback</h1>
        
        <Button onClick={handleLeftClick} text='good' />  	
		<Button onClick={handleRightClick} text='neutral' />   
		<Button onClick={handlenewClick} text='bad' />  		
		
        
		<h1>statistics</h1>
		<History allClicks={allClicks} good ={good} bad ={bad} neutral ={neutral} average ={average} positivepercent ={positivepercent} />
		
		
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
