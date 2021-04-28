const main = document.querySelector("main")


const url ="https://covid-193.p.rapidapi.com/statistics";

async function retriveFunctionAPIs(){
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


    main.innerHTML = "";

    for(let i = 0; i < data.length;i++){
        if(i <= 15){
            main.innerHTML += 
            `<div class ="currency">
            <p style="font-weight:bold">Country:</p>
            
            <a href="details.html?country=${data[i].country}">
            ${data[i].country} </a>

       

            <p> The Population Number: ${data[i].population}</p>

            <p> Number of COVID cases: ${data[i].cases.active}</p>
            </div>`
            
        }
    }}
catch(error){
    main.innerHTML += 
    `<div class="errormessage">

    <p style="font-weight:bold">An error has occured:</p>
    <p>${error} </p>

    </div>`
}}

retriveFunctionAPIs()