let citiesList = document.querySelector(".list-group");
let cityInput = document.querySelector(".form-input");
let storedCities = [];
let firstDayTime = document.querySelector(".first-day-time");
let firstDayIcon = document.querySelector(".first-day-icon");
let firstDayTemp = document.querySelector(".first-day-temp");
let firstDayWin = document.querySelector(".first-day-win");
let firstDayHum = document.querySelector(".first-day-hum");
let secondDayTime = document.querySelector(".second-day-time");
let secondtDayIcon = document.querySelector(".second-day-icon");
let secondDayTemp = document.querySelector(".second-day-temp");
let secondDayWin = document.querySelector(".second-day-win");
let secondDayHum = document.querySelector(".second-day-hum");


// let chosenCity = document.querySelector(".form-input").value;



// function renderCities() {
//     // Clear element and update todoCountSpan
//     citiesList.innerHTML = "";

//     // Render a new li for each city
//     for (var i = 0; i < storedCities.length; i++) {
//         // create a variable that stores the "current" todo
//         var city = storedCities[i];

//         // create a li element (list item) that we will append to our list later
//         var button = document.createElement("button"); // <li></li>

//         // set the text of the list item to be the value of todo
//         button.textContent = city;   // <li>Teach  HTML</li>

//         // add class to the button
//         button.className = "buttonCity";

//         // make this the last child of the todoList, which is the <ul> on our page

//         citiesList.appendChild(button);
//     }
// }


function init() {
    var cityToStore = JSON.parse(localStorage.getItem(`city`));
    storedCities = cityToStore;


    //   renderCities()
}

function storeCities() {
    localStorage.setItem(`city`, JSON.stringify(document.querySelector(".form-input").value));
}


//add an event listener with event delegation for every button buttonsDiv 
let buttonsDiv = document.querySelector(".cityButtons")


buttonsDiv.addEventListener("click", event => {
    event.preventDefault();
    let city = document.querySelector(".weather-search").value;
    let Berlin = document.querySelector(".btn-Berlin").textContent;
    let Paris = document.querySelector(".btn-Paris").textContent;
    let Edinburgh = document.querySelector(".btn-Edinburgh").textContent;
    let Madrid = document.querySelector(".btn-Madrid").textContent;
    let Birmingham = document.querySelector(".btn-Birmingham").textContent;
    let London = document.querySelector(".btn-London").textContent;
    if (event.target.id == 'search-button') {
        console.log(city);

        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0];

                console.log(firstCity.lat);
                console.log(firstCity.lon);

                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=cba5837e4c2716904395e63c014ee26b`)
            })


            .then(response => response.json())
            .then(data => {

                console.log(data);
                firstDayTime.innerHTML = moment(data.list[0].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[0].main.temp + "K";
                firstDayWin.innerHTML = "Wind " + data.list[0].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity " + data.list[0].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                secondDayWin.innerHTML = "Wind " + data.list[7].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity " + data.list[7].main.humidity; + " %"

            })

        storedCities.push(city);
        // renderCities();
    }
    else if (event.target.id == 'btn1') {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + Berlin + "&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0];
                console.log(firstCity.lat);
                console.log(firstCity.lon);
                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=cba5837e4c2716904395e63c014ee26b`)
            })
            .then(response => response.json())
            .then(data => {

                console.log(data);
            })
    }
    else if (event.target.id == 'btn2') {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + Paris + "&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0];
                console.log(firstCity.lat);
                console.log(firstCity.lon);

                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=cba5837e4c2716904395e63c014ee26b`)
            })
            .then(response => response.json())
            .then(data => {

                console.log(data);
            })
    }
    else if (event.target.id == 'btn3') {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + Edinburgh + "&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0];
                console.log(firstCity.lat);
                console.log(firstCity.lon);
                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=cba5837e4c2716904395e63c014ee26b`)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
    else if (event.target.id == 'btn4') {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + Madrid + "&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0];
                console.log(firstCity.lat);
                console.log(firstCity.lon);
                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=cba5837e4c2716904395e63c014ee26b`)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
    else if (event.target.id == 'btn5') {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + Birmingham + "&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0];
                console.log(firstCity.lat);
                console.log(firstCity.lon);
                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=cba5837e4c2716904395e63c014ee26b`)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
    else if (event.target.id == 'btn6') {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + London + "&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(citiesFound => {
                let firstCity = citiesFound[0];
                console.log(firstCity.lat);
                console.log(firstCity.lon);
                return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=cba5837e4c2716904395e63c014ee26b`)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }
    // cityInput.value = "";

    // storeCities();

});






