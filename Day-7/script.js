// Rest countries data:

const data = new XMLHttpRequest();
data.open("GET","https://restcountries.com/v2/all");
data.send();
data.responseType = "json";
data.onload = function countData(){
    const countries = data.response;
    console.log(countries)

    //________________________________________________________________________________________//

    //A). Get all the countries from the Asia continent / region using the Filter function
    let asianCountries = [];
    countries.filter((e)=>{
        if(e.region === "Asia"){
            asianCountries.push(e.name) 
        }
    });
    console.log(`A). Asian countries : ${asianCountries}`);
    //________________________________________________________________________________________//
    
    // B). Get all the countries with a population of less than 2 lakhs using Filter function
    countries.filter((e)=>{
        if(e.population < 200000){
            console.log(`B). Country Name: ${e.name} , Population : ${e.population}`)
        }
    });
    //________________________________________________________________________________________//
    
    // C). Print the following details name, capital, flag using forEach function
    countries.forEach(element => {
        console.log("C). Country Name: ",element.name);
        console.log(`C). ${element.name}'s Capital: ${element.capital}`);
        console.log(`C). ${element.name}'s Flag: ${element.flag}`);
    });
    //________________________________________________________________________________________//

    // D).Print the total population of countries using reduce function
    let allPopulation = countries.map((e)=>e.population);
    let total = allPopulation.reduce((acc, cur)=> acc + cur);
    console.log(`D). Total population of Countries: ${total}`);
    //________________________________________________________________________________________//

    // E). Print the country which uses US Dollars as currency.
    let counter = 0;
    countries.filter((e)=>{
        if(e.currencies !== undefined && e.currencies[0].code === "USD"){
            console.log(`E). Country uses US Dollars as currency is : ${e.name} ${e.currencies[0].code}`);
            counter = counter +1;
        }
    });
    console.log(`E). Total countries uses Us Dollar as currency : ${counter}`)
    //________________________________________________________________________________________//
}
