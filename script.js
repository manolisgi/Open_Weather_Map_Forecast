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
let thirdDayTime = document.querySelector(".third-day-time");
let thirdDayIcon = document.querySelector(".third-day-icon");
let thirdDayTemp = document.querySelector(".third-day-temp");
let thirdDayWin = document.querySelector(".third-day-win");
let thirdDayHum = document.querySelector(".third-day-hum");
let fourthDayTime = document.querySelector(".fourth-day-time");
let fourthtDayIcon = document.querySelector(".fourth-day-icon");
let fourthDayTemp = document.querySelector(".fourth-day-temp");
let fourthDayWin = document.querySelector(".fourth-day-win");
let fourthDayHum = document.querySelector(".fourth-day-hum");
let fifthDayTime = document.querySelector(".fifth-day-time");
let fifthDayIcon = document.querySelector(".fifth-day-icon");
let fifthDayTemp = document.querySelector(".fifth-day-temp");
let fifthDayWin = document.querySelector(".fifth-day-win");
let fifthDayHum = document.querySelector(".fifth-day-hum");
let todayTemp = document.querySelector(".today-temp");
let todayWin = document.querySelector(".today-win");
let todayHum = document.querySelector(".today-hum");
let todayTime = document.querySelector(".today-time");




function init() {
    var cityToStore = JSON.parse(localStorage.getItem(`city`));
    storedCities = cityToStore;
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
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(todayData => {
                console.log(todayData);
                todayTime.innerHTML = moment(todayData.dt, "X").format("DD/MM/YYYY HH:mm:ss");
                todayTemp.innerHTML = "Temp: " + todayData.main.temp + "K";
                todayWin.innerHTML = "Wind: " + todayData.wind.speed + " KPH";
                todayHum.innerHTML = "Humidity: " + todayData.main.humidity; + " %"
            })


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
                firstDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                firstDayWin.innerHTML = "Wind: " + data.list[7].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity: " + data.list[7].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[14].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[14].main.temp + "K";
                secondDayWin.innerHTML = "Wind: " + data.list[14].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity: " + data.list[14].main.humidity; + " %"
                thirdDayTime.innerHTML = moment(data.list[21].dt, "X").format("DD/MM/YYYY");
                thirdDayTemp.innerHTML = "Temp: " + data.list[21].main.temp + "K";
                thirdDayWin.innerHTML = "Wind: " + data.list[21].wind.speed + " KPH";
                thirdDayHum.innerHTML = "Humidity: " + data.list[21].main.humidity; + " %"
                fourthDayTime.innerHTML = moment(data.list[28].dt, "X").format("DD/MM/YYYY");
                fourthDayTemp.innerHTML = "Temp: " + data.list[28].main.temp + "K";
                fourthDayWin.innerHTML = "Wind: " + data.list[28].wind.speed + " KPH";
                fourthDayHum.innerHTML = "Humidity: " + data.list[28].main.humidity; + " %"
                fifthDayTime.innerHTML = moment(data.list[38].dt, "X").format("DD/MM/YYYY");
                fifthDayTemp.innerHTML = "Temp: " + data.list[38].main.temp + "K";
                fifthDayWin.innerHTML = "Wind: " + data.list[38].wind.speed + " KPH";
                fifthDayHum.innerHTML = "Humidity: " + data.list[38].main.humidity; + " %"
            })

        // storedCities.push(city);
        // renderCities();
    }
    else if (event.target.id == 'btn1') {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(todayData => {
                console.log(todayData);
                todayTime.innerHTML = moment(todayData.dt, "X").format("DD/MM/YYYY HH:mm:ss");
                todayTemp.innerHTML = "Temp: " + todayData.main.temp + "K";
                todayWin.innerHTML = "Wind: " + todayData.wind.speed + " KPH";
                todayHum.innerHTML = "Humidity: " + todayData.main.humidity; + " %"
            })
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
                firstDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                firstDayWin.innerHTML = "Wind " + data.list[7].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity " + data.list[7].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[14].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[14].main.temp + "K";
                secondDayWin.innerHTML = "Wind " + data.list[14].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity " + data.list[14].main.humidity; + " %"
                thirdDayTime.innerHTML = moment(data.list[21].dt, "X").format("DD/MM/YYYY");
                thirdDayTemp.innerHTML = "Temp: " + data.list[21].main.temp + "K";
                thirdDayWin.innerHTML = "Wind " + data.list[21].wind.speed + " KPH";
                thirdDayHum.innerHTML = "Humidity " + data.list[21].main.humidity; + " %"
                fourthDayTime.innerHTML = moment(data.list[28].dt, "X").format("DD/MM/YYYY");
                fourthDayTemp.innerHTML = "Temp: " + data.list[28].main.temp + "K";
                fourthDayWin.innerHTML = "Wind " + data.list[28].wind.speed + " KPH";
                fourthDayHum.innerHTML = "Humidity " + data.list[28].main.humidity; + " %"
                fifthDayTime.innerHTML = moment(data.list[38].dt, "X").format("DD/MM/YYYY");
                fifthDayTemp.innerHTML = "Temp: " + data.list[38].main.temp + "K";
                fifthDayWin.innerHTML = "Wind " + data.list[38].wind.speed + " KPH";
                fifthDayHum.innerHTML = "Humidity " + data.list[38].main.humidity; + " %"

            })
    }
    else if (event.target.id == 'btn2') {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(todayData => {
                console.log(todayData);
                todayTime.innerHTML = moment(todayData.dt, "X").format("DD/MM/YYYY HH:mm:ss");
                todayTemp.innerHTML = "Temp: " + todayData.main.temp + "K";
                todayWin.innerHTML = "Wind: " + todayData.wind.speed + " KPH";
                todayHum.innerHTML = "Humidity: " + todayData.main.humidity; + " %"
            })
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=Paris&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
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
                firstDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                firstDayWin.innerHTML = "Wind " + data.list[7].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity " + data.list[7].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[14].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[14].main.temp + "K";
                secondDayWin.innerHTML = "Wind " + data.list[14].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity " + data.list[14].main.humidity; + " %"
                thirdDayTime.innerHTML = moment(data.list[21].dt, "X").format("DD/MM/YYYY");
                thirdDayTemp.innerHTML = "Temp: " + data.list[21].main.temp + "K";
                thirdDayWin.innerHTML = "Wind " + data.list[21].wind.speed + " KPH";
                thirdDayHum.innerHTML = "Humidity " + data.list[21].main.humidity; + " %"
                fourthDayTime.innerHTML = moment(data.list[28].dt, "X").format("DD/MM/YYYY");
                fourthDayTemp.innerHTML = "Temp: " + data.list[28].main.temp + "K";
                fourthDayWin.innerHTML = "Wind " + data.list[28].wind.speed + " KPH";
                fourthDayHum.innerHTML = "Humidity " + data.list[28].main.humidity; + " %"
                fifthDayTime.innerHTML = moment(data.list[38].dt, "X").format("DD/MM/YYYY");
                fifthDayTemp.innerHTML = "Temp: " + data.list[38].main.temp + "K";
                fifthDayWin.innerHTML = "Wind " + data.list[38].wind.speed + " KPH";
                fifthDayHum.innerHTML = "Humidity " + data.list[38].main.humidity; + " %"
            })
    }
    else if (event.target.id == 'btn3') {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Edinburgh&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(todayData => {
                console.log(todayData);
                todayTime.innerHTML = moment(todayData.dt, "X").format("DD/MM/YYYY HH:mm:ss");
                todayTemp.innerHTML = "Temp: " + todayData.main.temp + "K";
                todayWin.innerHTML = "Wind: " + todayData.wind.speed + " KPH";
                todayHum.innerHTML = "Humidity: " + todayData.main.humidity; + " %"
            })
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=Edinburgh&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
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
                firstDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                firstDayWin.innerHTML = "Wind " + data.list[7].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity " + data.list[7].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[14].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[14].main.temp + "K";
                secondDayWin.innerHTML = "Wind " + data.list[14].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity " + data.list[14].main.humidity; + " %"
                thirdDayTime.innerHTML = moment(data.list[21].dt, "X").format("DD/MM/YYYY");
                thirdDayTemp.innerHTML = "Temp: " + data.list[21].main.temp + "K";
                thirdDayWin.innerHTML = "Wind " + data.list[21].wind.speed + " KPH";
                thirdDayHum.innerHTML = "Humidity " + data.list[21].main.humidity; + " %"
                fourthDayTime.innerHTML = moment(data.list[28].dt, "X").format("DD/MM/YYYY");
                fourthDayTemp.innerHTML = "Temp: " + data.list[28].main.temp + "K";
                fourthDayWin.innerHTML = "Wind " + data.list[28].wind.speed + " KPH";
                fourthDayHum.innerHTML = "Humidity " + data.list[28].main.humidity; + " %"
                fifthDayTime.innerHTML = moment(data.list[38].dt, "X").format("DD/MM/YYYY");
                fifthDayTemp.innerHTML = "Temp: " + data.list[38].main.temp + "K";
                fifthDayWin.innerHTML = "Wind " + data.list[38].wind.speed + " KPH";
                fifthDayHum.innerHTML = "Humidity " + data.list[38].main.humidity; + " %"
            })
    }
    else if (event.target.id == 'btn4') {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(todayData => {
                console.log(todayData);
                todayTime.innerHTML = moment(todayData.dt, "X").format("DD/MM/YYYY HH:mm:ss");
                todayTemp.innerHTML = "Temp: " + todayData.main.temp + "K";
                todayWin.innerHTML = "Wind: " + todayData.wind.speed + " KPH";
                todayHum.innerHTML = "Humidity: " + todayData.main.humidity; + " %"
            })
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=Madrid&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
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
                firstDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                firstDayWin.innerHTML = "Wind " + data.list[7].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity " + data.list[7].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[14].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[14].main.temp + "K";
                secondDayWin.innerHTML = "Wind " + data.list[14].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity " + data.list[14].main.humidity; + " %"
                thirdDayTime.innerHTML = moment(data.list[21].dt, "X").format("DD/MM/YYYY");
                thirdDayTemp.innerHTML = "Temp: " + data.list[21].main.temp + "K";
                thirdDayWin.innerHTML = "Wind " + data.list[21].wind.speed + " KPH";
                thirdDayHum.innerHTML = "Humidity " + data.list[21].main.humidity; + " %"
                fourthDayTime.innerHTML = moment(data.list[28].dt, "X").format("DD/MM/YYYY");
                fourthDayTemp.innerHTML = "Temp: " + data.list[28].main.temp + "K";
                fourthDayWin.innerHTML = "Wind " + data.list[28].wind.speed + " KPH";
                fourthDayHum.innerHTML = "Humidity " + data.list[28].main.humidity; + " %"
                fifthDayTime.innerHTML = moment(data.list[38].dt, "X").format("DD/MM/YYYY");
                fifthDayTemp.innerHTML = "Temp: " + data.list[38].main.temp + "K";
                fifthDayWin.innerHTML = "Wind " + data.list[38].wind.speed + " KPH";
                fifthDayHum.innerHTML = "Humidity " + data.list[38].main.humidity; + " %"
            })
    }
    else if (event.target.id == 'btn5') {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Birmingham&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(todayData => {
                console.log(todayData);
                todayTime.innerHTML = moment(todayData.dt, "X").format("DD/MM/YYYY HH:mm:ss");
                todayTemp.innerHTML = "Temp: " + todayData.main.temp + "K";
                todayWin.innerHTML = "Wind: " + todayData.wind.speed + " KPH";
                todayHum.innerHTML = "Humidity: " + todayData.main.humidity; + " %"
            })
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=Birmingham&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
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
                firstDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                firstDayWin.innerHTML = "Wind " + data.list[7].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity " + data.list[7].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[14].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[14].main.temp + "K";
                secondDayWin.innerHTML = "Wind " + data.list[14].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity " + data.list[14].main.humidity; + " %"
                thirdDayTime.innerHTML = moment(data.list[21].dt, "X").format("DD/MM/YYYY");
                thirdDayTemp.innerHTML = "Temp: " + data.list[21].main.temp + "K";
                thirdDayWin.innerHTML = "Wind " + data.list[21].wind.speed + " KPH";
                thirdDayHum.innerHTML = "Humidity " + data.list[21].main.humidity; + " %"
                fourthDayTime.innerHTML = moment(data.list[28].dt, "X").format("DD/MM/YYYY");
                fourthDayTemp.innerHTML = "Temp: " + data.list[28].main.temp + "K";
                fourthDayWin.innerHTML = "Wind " + data.list[28].wind.speed + " KPH";
                fourthDayHum.innerHTML = "Humidity " + data.list[28].main.humidity; + " %"
                fifthDayTime.innerHTML = moment(data.list[38].dt, "X").format("DD/MM/YYYY");
                fifthDayTemp.innerHTML = "Temp: " + data.list[38].main.temp + "K";
                fifthDayWin.innerHTML = "Wind " + data.list[38].wind.speed + " KPH";
                fifthDayHum.innerHTML = "Humidity " + data.list[38].main.humidity; + " %"
            })
    }
    else if (event.target.id == 'btn6') {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=cba5837e4c2716904395e63c014ee26b")
            .then(response => response.json())
            .then(todayData => {
                console.log(todayData);
                todayTime.innerHTML = moment(todayData.dt, "X").format("DD/MM/YYYY HH:mm:ss");
                todayTemp.innerHTML = "Temp: " + todayData.main.temp + "K";
                todayWin.innerHTML = "Wind: " + todayData.wind.speed + " KPH";
                todayHum.innerHTML = "Humidity: " + todayData.main.humidity; + " %"
            })
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=cba5837e4c2716904395e63c014ee26b")
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
                firstDayTime.innerHTML = moment(data.list[7].dt, "X").format("DD/MM/YYYY");
                firstDayTemp.innerHTML = "Temp: " + data.list[7].main.temp + "K";
                firstDayWin.innerHTML = "Wind " + data.list[7].wind.speed + " KPH";
                firstDayHum.innerHTML = "Humidity " + data.list[7].main.humidity; + " %"
                secondDayTime.innerHTML = moment(data.list[14].dt, "X").format("DD/MM/YYYY");
                secondDayTemp.innerHTML = "Temp: " + data.list[14].main.temp + "K";
                secondDayWin.innerHTML = "Wind " + data.list[14].wind.speed + " KPH";
                secondDayHum.innerHTML = "Humidity " + data.list[14].main.humidity; + " %"
                thirdDayTime.innerHTML = moment(data.list[21].dt, "X").format("DD/MM/YYYY");
                thirdDayTemp.innerHTML = "Temp: " + data.list[21].main.temp + "K";
                thirdDayWin.innerHTML = "Wind " + data.list[21].wind.speed + " KPH";
                thirdDayHum.innerHTML = "Humidity " + data.list[21].main.humidity; + " %"
                fourthDayTime.innerHTML = moment(data.list[28].dt, "X").format("DD/MM/YYYY");
                fourthDayTemp.innerHTML = "Temp: " + data.list[28].main.temp + "K";
                fourthDayWin.innerHTML = "Wind " + data.list[28].wind.speed + " KPH";
                fourthDayHum.innerHTML = "Humidity " + data.list[28].main.humidity; + " %"
                fifthDayTime.innerHTML = moment(data.list[38].dt, "X").format("DD/MM/YYYY");
                fifthDayTemp.innerHTML = "Temp: " + data.list[38].main.temp + "K";
                fifthDayWin.innerHTML = "Wind " + data.list[38].wind.speed + " KPH";
                fifthDayHum.innerHTML = "Humidity " + data.list[38].main.humidity; + " %"
            })
    }


});






