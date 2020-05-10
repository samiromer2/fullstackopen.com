import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const History = (props) => {
  if (props.allClicks.length === 0) {
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
  const [selectedvote, setallvote] = useState([])
  let votecount0 = [];
  let votecount1 = [];
  let votecount2 = [];
  let votecount3 = [];
  let votecount4 = [];
  let votecount5 = [];
  
  var list = [];
function empty() {
    //empty your array
    list = [];
}
//empty();

  if (selectedvote.length > 0) {
 
  votecount0 = selectedvote.filter((elem) => elem === 0);
  list.push(votecount0.length);
  votecount1 = selectedvote.filter((elem) => elem === 1);
  list.push(votecount1.length);
  votecount2 = selectedvote.filter((elem) => elem === 2);
  list.push(votecount2.length);
  votecount3 = selectedvote.filter((elem) => elem === 3);
  list.push(votecount3.length);
  votecount4 = selectedvote.filter((elem) => elem === 4);
  list.push(votecount4.length);
  votecount5 = selectedvote.filter((elem) => elem === 5);
  list.push(votecount5.length);
  
  console.log(list); 
  var max = list.reduce(function (prev, current) {
   return (prev > current) ? prev : current
});

 function getIndex(value, arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
    };
	var indexofmax = getIndex(max,list)
  
  console.log('this - >',indexofmax)
  empty(list)
  //console.log('this - >',votecount0.length)
  
  //here i need to check which value is bigger
  }
  
  const setToValue = () => () => { 

   var newValue = Math.floor((Math.random() * 6) );
  setSelected(newValue) 
  }
  
    const setvote = (props) => () => { 
	console.log(props.selected)
	
	setallvote(selectedvote.concat(props.selected))
	
  //setClicks(newClicks)

  //setallvote(newValue) 
  }
 
 const Button = ({ onClick, text }) => ( 
 <button onClick={onClick}>    
 {text}  
 </button>)
 
  return (
  
  <>
  
    <div>
	<h2>Anecdote of the day</h2>	
	<br/>
      {props.anecdotes[selected]}  	
	 
	 
	 <div>
	  
	  <Button onClick={setvote({selected},{selectedvote})}  text='vote' />  	
	  <Button onClick={setToValue()} text='next anecdote' />  
	  <History allClicks={selectedvote} listofanecdotes = {props.anecdotes} winvotedone = {indexofmax}/>
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
