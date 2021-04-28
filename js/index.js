
const url ="https://api.coinbase.com/v2/currencies";

const main = document.querySelector("main")

async function retriveFunctionAPIs(){
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
            <p style="font-weight:bold">Code Name:</p>
            
            <a href="details.html?id=${data[i].id}">
            ${data[i].id} </a>

       

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

retriveFunctionAPIs()