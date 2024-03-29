

// Selector for the HTML
const main = document.querySelector(".detail-information")

const header = document.querySelector("header")

const head = document.querySelector("head title")

const theIdClass = document.querySelector(".id-number")



// QueryString and ID
const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const country = params.get("country")

console.log(country)

const url ="https://covid-193.p.rapidapi.com/statistics?country=" + country;



//Function
async function retriveFunctionAPI(){
    try{
        main.innerHTML = ""
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7eb59e8046msh9d108d1fd9d093dp1823e6jsn20f10be6b624",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
            }
        })
        .then(response => response.json())

        const data = response.response

        console.log(data);

        createHtml(data);
        
    }
    catch(error){
    theIdClass.innerHTML += 
    `<div class="errormessage">

    <p style="font-weight:bold">An error has occured:</p>
    <p>${error}</p>

    </div>`
}}
setTimeout(retriveFunctionAPI, 1000); 


function createHtml(data){
    for(let i = 0; i < data.length; i++){
        
        header.innerHTML += `<h1 style="width:100%"> ${data[i].country}</h1>`
        
        main.innerHTML += ` 
        <div>
        <p style="font-weight:bold">Continent: </p>
        <p>${data[i].continent}</p>
        </div>

        <div>
        <p style="font-weight:bold">Population:</p>
        <p> ${data[i].population}</p>
        </div>

        <div>
        <p style="font-weight:bold">Number of Active Cases: </p>
        <p> ${data[i].cases.active}</p>
    
        </div>`

        head.innerHTML = `${data[i].country}`
}}
