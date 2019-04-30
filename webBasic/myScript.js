// alert('this is alert box');
 console.log(document.title);
console.log(document.URL);

// const mySelector = document.querySelectorAll('.idClass');
// console.log(mySelector);

 const mySelector = document.querySelectorAll('p')

mySelector.forEach( p => p.textContent = 'i changed the text content')

// create NewElement
const myNewElement = document.createElement('h1')
myNewElement.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewElement)


// Event listner
document.querySelector('button').addEventListener('click',(event) => {
  event.target.textContent = 'I was clicked';
})

//track input myform

document.querySelector('#myform').addEventListener('change', (event)=> {
  console.log(event.target.value);
})

// Search field 2
document.querySelector("#filed2").addEventListener('input',(event)=>{
  console.log(event.target.value);
})
