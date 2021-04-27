// Selector for the HTML
const main = document.querySelector("main")

const theIdClass = document.querySelector(".id-number")

// QueryString and ID
const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const id = params.get("id")

console.log(id)


const url ="https://api.coinbase.com/v2/currencies/" + id ;




// Function
async function retriveFunctionAPI(){
    
    try{
    const response = await fetch(url);
    const json = await response.json()
    const data = json.errors
    console.log(data)

    createHTML(json);

    }
    catch(error){
    main.innerHTML += 
    `<div class="errormessage">

    <p style="font-weight:bold">An error has occured:</p>
    <p>${error} </p>

    </div>`
}}

retriveFunctionAPI()

function createHTML(json){
    theIdClass.innerHTML += `
    <div>
    <h1> ${json.name} <h1>
    </div>  
    <div>

    <p>The Code number: ${json.id}</p>
    <p>The value of this currency: ${json.min_size}</p>

    </div>`
}

