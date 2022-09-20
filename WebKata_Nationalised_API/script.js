document.body.innerHTML = `<div class="container">
        <h1>Predict the Nationality of a Name</h1>
        <div class="search_box">
            <input name="inputt" type="text" placeholder="Type your Name">
            <button type="button" onclick="inputFunc()">Search</button>
        </div>

        <div id="name">Name : </div>
        <div class="cont-container">
            <div class="country-1">
                <h3>Country</h3>
                <p id="count-name"> - </p>
                <p id="count-name-2"> - </p>
            </div>

            <div class="country-2">
                <h3>Probability</h3>
                <p id="prop"> - </p>
                <p id="prop-2"> - </p>
            </div>
        </div>
    </div>`


async function looping(name) {
    console.log(name);
    try {
        let contName = '';
        let countryName = await fetch("https://restcountries.com/v3.1/all")
            .then(con => con.json())
            .then(data => {
                contName = data;
                contName.forEach(e => {
                    if (name.country[0].country_id === e.cca2) {
                        document.getElementById("count-name").innerHTML = `1. ${e.name.common}`
                    }
                    if (name.country[1].country_id === e.cca2) {
                        document.getElementById("count-name-2").innerHTML = `2. ${e.name.common}`
                    }
                });

                document.getElementById("name").innerHTML = `Name : ${name.name}`
                document.getElementById("prop").innerHTML = `${name.country[0].probability}`
                document.getElementById("prop-2").innerHTML = `${name.country[1].probability}`
            });
    } catch (err) {
        console.log("Try again: " + err.message);
        document.getElementById("name").innerHTML = "Try again : Please Enter valid Name...";
    }
}


async function inputFunc() {
    try {
        let inp = document.getElementsByName("inputt")
        await fetch(`https://api.nationalize.io/?name=${inp[0].value}`)
            .then((data) => data.json())
            .then((data) => looping(data))


    } catch (error) {

        document.getElementById("name").innerHTML = ""
        document.getElementById("name").innerHTML = "Try again: " + error.message
    }


}