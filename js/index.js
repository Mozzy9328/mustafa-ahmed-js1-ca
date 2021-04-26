

const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const id = params.get("id")

console.log(id)

const url ="https://api.coinbase.com/v2/currencies/";

const main = document.querySelector("main")

async function retriveFunctionAPI(){
    try{
    const response = await fetch(url)

    const json = await response.json()

    const data = json.data

    console.log(data)

    main.innerHTML = "";

    for(let i = 0; i < data.length;i++){
        if(i <= 15){
            main.innerHTML += 
            `<div class ="currency">

            <p style="font-weight:bold">Code Name:

                <a href="details.html">${data[i].id}</a>

            </p>

            <p> Name: ${data[i].name}</p>

            <p>Value: ${data[i].min_size}</p>
            
            </div>`
        }
    }
}
catch(error){
    main.innerHTML += 
    `<div class="errormessage">

    <p style="font-weight:bold">An error has occured:</p>
    <p>${error} </p>

    </div>`
}}

retriveFunctionAPI()