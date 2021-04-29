const main = document.querySelector("main")

const option = document.querySelector("select")

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


    main.innerHTML, option.innerHTML = "";

    for(let i = 0; i < data.length;i++){
        // if(i <= 15){

            main.innerHTML += 
            `<a href="details.html?country=${data[i].country}" class ="currency">
            
            <p style="font-weight: bold">Country:</p>
            <p> ${data[i].country} </p>

            <p style="font-weight: bold"> Population:</p>
            <p> ${data[i].population}</p>

            <p style="font-weight: bold">Active COVID cases:</p>
            <p>${data[i].cases.active}</p>
            </a>`
            
            countries(data)

        // }
    }}
catch(error){
    main.innerHTML += 
    `<div class="errormessage">

    <p style="font-weight:bold">An error has occured:</p>
    <p>${error} </p>

    </div>`
}}

retriveFunctionAPIs()


function countries(data){
for(let i = 0; i < data.length; i++){
option.innerHTML += `
<select>
<option>${data[i].country}</option>
</select>`
}}