let citiesList = document.querySelector(".list-group");
let cityInput = document.querySelector(".form-input");
let storedCities = [];
// let chosenCity = document.querySelector(".form-input").value;



function renderCities() {
    // Clear element and update todoCountSpan
    storedCities.innerHTML = "";

    // Render a new li for each city
    for (var i = 0; i < storedCities.length; i++) {
        // create a variable that stores the "current" todo
        var city = storedCities[i];

        // create a li element (list item) that we will append to our list later
        var li = document.createElement("li"); // <li></li>

        // set the text of the list item to be the value of todo
        li.textContent = city;   // <li>Teach  HTML</li>

        // make this the last child of the todoList, which is the <ul> on our page

        citiesList.appendChild(li);
    }
}


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
            
        })
        
        storedCities.push(city);
        renderCities();
    }
    // cityInput.value = "";

    // storeCities();
    
});






