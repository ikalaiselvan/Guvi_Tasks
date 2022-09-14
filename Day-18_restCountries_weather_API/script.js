
function createCountries(allDetails){
    // console.log(allDetails);
    allDetails.map(element => {
        let name = element.name.common;
        // console.log(typeof(name))    
    document.body.innerHTML += `<div class="ca card shadow-lg p-3 mb-5" style="width: 280px;">
        <img src="${element.flags.png}" class="card-img-top" alt="${element.name.common} flag">
        <div class="ca1 card-body">
            <h4 class="card-title">${element.name.common}</h4>
            <p class="card-text"><span style = "font-weight:bold;">population: </span> ${element.population}</p>
            <p class="card-text"><span style = "font-weight:bold;">Region:</span> </span> ${element.region}</p>
            <p class="card-text"><span style = "font-weight:bold;">Capital:</span> ${element.capital}</p>
            <button class="btn btn-primary" onclick="onCli('${name}')">Weather Data</button>
        </div>`
});
}

function reset(){
    fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((allDetails) => createCountries(allDetails))
}
reset();

function onCli(name){
    // console.log(name);

    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((details) => one(details))

    function one(details){
        // console.log(details);
        details.map((element) => {
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3aab81d7e627b3a2b0b70419be438119`)
            .then((res) => res.json())
            .then((weather) => wea(weather))
        
            function wea(weather) {
                console.log(weather);
                if(name === (element.name.common)){
                    document.body.innerHTML = ``
                    document.body.innerHTML += `<div class="ca card shadow-lg p-3 mb-5" style="width: 280px;">
                    <img src="${element.flags.png}" class="card-img-top" alt="${element.name.common} flag">
                    <div class="ca1 card-body">
                        <h4 class="card-title">${element.name.common}</h4>
                        <p class="card-text"><span style = "font-weight:bold;">Temperature: </span> ${weather.main.temp}</p>
                        <p class="card-text"><span style = "font-weight:bold;">Weather:</span> ${weather.weather[0].main}</p>
                        <p class="card-text"><span style = "font-weight:bold;">Wind speed:</span> </span> ${weather.wind.speed}</p>
                        <button href="#" class="btn btn-primary" onclick="reset()">Country data</button>
                    </div>`   
                }
            }
        })
    }
}








// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}