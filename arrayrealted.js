Create an Array

let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2

Access an Array item using the index position

let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

Loop over an Array

fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

Add an item to the end of an Array

let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

Remove an item from the end of an Array

let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

Remove an item from the beginning of an Array

let first = fruits.shift() // remove Apple from the front
// ["Banana"]

Add an item to the beginning of an Array

let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

Find the index of an item in the Array

fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1

Remove an item by index position

let removedItem = fruits.splice(pos, 1) // this is how to remove an item
                                        
// ["Strawberry", "Mango"]

Remove items from an index position

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]

Copy an Array

let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]



let board = [ 
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ]

console.log(board.join('\n') + '\n\n')

// Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = ' '
console.log(board.join('\n'))


R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , , 
 , , , , , , , 
 , , , , , , , 
 , , , , , , , 
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , , 
 , , , , , , , 
 , , , ,p, , , 
 , , , , , , , 
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
