

// Selector for the HTML
const main = document.querySelector("main")

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
retriveFunctionAPI()


function createHtml(data){
    for(let i = 0; i < data.length; i++){
        main.innerHTML += `
        <div>
        <h1>Continent: ${data[i].continent}</h1>
        <h2>Country: ${data[i].country}</h2>
        </div>  
        <div>
    
        <p>Population: ${data[i].population}</p>
        <p>Number of Active Cases: ${data[i].cases.active}</p>
    
        </div>`

        head.innerHTML = `${data[i].country}`
}}
