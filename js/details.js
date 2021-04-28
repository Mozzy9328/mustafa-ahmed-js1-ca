

// Selector for the HTML
const main = document.querySelector("main")

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

            main.innerHTML += `
            <div>
            <h1>${data.country}</h1>
            </div>  
            <div>
        
            <p>The Code number: ${data.population}</p>
            <p>The value of this currency: ${data.cases}</p>
        
            </div>`
        
    }
    catch(error){
    theIdClass.innerHTML += 
    `<div class="errormessage">

    <p style="font-weight:bold">An error has occured:</p>
    <p>${error}</p>

    </div>`
}}
retriveFunctionAPI()



