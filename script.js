// API KEY
// const apiKey = a2e2e87c947af1ae1888811705b0441c;

// const currentDate = (mm/dd/yyyy);

const inputLocation = $("#citySearch")



const forecastURL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=a2e2e87c947af1ae1888811705b0441c&q=" + inputLocation;


$.ajax({
    url: forecastURL,
    method: "GET"

})
.then(function (weather){
    console.log(forecastURL);
})


