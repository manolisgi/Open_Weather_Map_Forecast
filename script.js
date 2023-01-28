let citiesList = document.querySelector(".list-group");


//add an event listener with event delegation for every button buttonsDiv 
let buttonsDiv = document.querySelector(".cityButtons")

buttonsDiv.addEventListener("click", event => {
    event.preventDefault();
    let city = document.querySelector(".weather-search").value;
    if (event.target.tagName === 'BUTTON') {
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

                console.log(data)

            })

    }

});

// function renderCities() {
//     // Clear element and update todoCountSpan
//     citiesList.innerHTML = "";
  
//     // Render a new li for each city
//     for (var i = 0; i < citiesList.length; i++) {
//       // create a variable that stores the "current" todo
//       var city = citiesList[i];
  
//       // create a li element (list item) that we will append to our list later
//       var li = document.createElement("li"); // <li></li>
  
//       // set the text of the list item to be the value of todo
//       li.textContent = city;   // <li>Teach  HTML</li>
  
//       // make this the last child of the todoList, which is the <ul> on our page

//       citiesList.appendChild(li);
//     }
//   }
