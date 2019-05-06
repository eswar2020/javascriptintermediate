function myValidation() {
    let myValue = document.getElementById('myform').value;

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log("NOT a valid input");
        
    } else {
        console.log("this is valid input");
        
    }
}
 document.getElementById('idOne').innerHTML = "change P text using getElementById";

// MyForm


document.querySelector('.myForm').addEventListener('submit', (event) => {
     event.preventDefault();
    console.log(event.target.FirstName.value);
    console.log(event.target.LastName.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.repassword.value);
    
    event.target.FirstName.value = '';
    event.target.LastName.value = '';
    event.target.email.value = '';
    event.target.password.value = '';
    event.target.repassword.value = '';     
})

function passwordMatch() {
    let myValue1 = document.getElementById('myPassword').value
    let myValue2 = document.getElementById('rePassword').value

    if (myValue1 === myValue2) {
        alert("paswword match");
        console.log("password match");
        
    } else {
        console.log("password doesnt match");
        alert("password not matched");
        
    }
}
