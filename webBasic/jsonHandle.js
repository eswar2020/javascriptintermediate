const student = {
    name: 'Eswar',
    age: 25,
    isActive: true

}

// Convert this Object to String 

const objToString = JSON.stringify(student)

console.log(typeof objToString);


// Storing data to localStorage
localStorage.setItem('student',objToString)


const toJSONItem = JSON.parse(objToString)

console.log(typeof toJSONItem);

console.log(toJSONItem.age);

