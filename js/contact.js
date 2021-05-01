const theForm = document.querySelector("form")
const formError = document.querySelectorAll(".form-error")

const name = document.querySelector("#name")
const subject = document.querySelector("#subject")
const email = document.querySelector("#email")
const address = document.querySelector("#address")
const button = document.querySelector("#submit")


function forContactForm(){
    event.preventDefault();

// Name

if(name.value.trim().length >= 5){
    console.log("not required")
    formError[0].style.display = "none"

}
else{
    formError[0].style.display = "block"
}


// Subject

    if(subject.value.trim().length >= 10){
        console.log("not required")
        formError[1].style.display = "none"

    }
    else{
        formError[1].style.display = "block"
    }

// Email

    if(checkEmail(email.value) === true){
        console.log("not required")
        formError[2].style.display = "none"

    }
    else{
        formError[2].style.display = "block"
    }


// Address 
    if(address.value.trim().length >= 25){
        console.log("not required")
        formError[3].style.display = "none"

    }
    else{
        formError[3].style.display = "block"
    }
}

button.addEventListener("click", forContactForm)

function checkEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(email)
    return match
}