const theInfo = document.querySelector(".the-information")

const option = document.querySelector("#continent")

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

    theInfo.innerHTML = "";

    for(let i = 0; i < data.length; i++){
        if(data[i].continent === option.value){
            theInfo.innerHTML += 
            `<a href="details.html?country=${data[i].country}" id="box-color">

            <p style="font-weight: bold">Country:</p>
            <p> ${data[i].country} </p>

            <p style="font-weight: bold">Continent:</p>
            <p> ${data[i].continent} </p>

            <p style="font-weight: bold"> Population:</p>
            <p> ${data[i].population}</p>

            <p style="font-weight: bold">Active COVID cases:</p>
            <p>${data[i].cases.active}</p>

            </a>`

    }}
            } 
catch(error){
    theInfo.innerHTML += 
    `<div class="errormessage">

    <p style="font-weight:bold">An error has occured:</p>
    <p>${error} </p>

    </div>`
}}

option.addEventListener("change", retriveFunctionAPIs)






//  function optionOnChange(){

// }

// const selectedValue = option.target;
// console.log(selectedValue)

// for(let i = 1; i <= selectedValue; i++) {