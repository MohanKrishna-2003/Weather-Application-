console.log("Working....");

// checking for the weather of the given city
const btn = document.getElementById('search');
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    document.getElementsByClassName('rightcontainer')[0].style.display = "block";
    const rightContainer = document.querySelector('.rightcontainer');
    rightContainer.style.display = "flex";
    rightContainer.style.flexDirection = "column";
    rightContainer.style.alignItems = "center";
    rightContainer.style.justifyContent = "space-around";
    const cityName = document.getElementById('cityName').value;
    console.log(cityName);
    await checkWeather(cityName.toLowerCase());
});

async function checkWeather(cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a8ceb44593289e09e22496f6531085a7`);
        var data = await response.json();
        console.log(data);
        if((parseInt(data.cod))==404){
            document.getElementsByClassName('rightcontainer')[0].style.display = "<h1> Invalid City";
        }
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('climate').innerHTML = data.weather[0].main;
        document.getElementById('tempvalue').innerHTML = parseInt(data.main.temp - 273.15) + "&deg;C";
        document.getElementById('windvalue').innerHTML = data.wind.speed;

        const weather = data.weather[0].main.toLowerCase();
        console.log(weather);
        if (weather === "clouds") {
            document.getElementById('currclimate').src = "/climate images/cloudy.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "wind") {
            document.getElementById('currclimate').src = "/climate images/windy.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "rain") {
            document.getElementById('currclimate').src = "/climate images/rainy.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "snow") {
            document.getElementById('currclimate').src = "/climate images/snow.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "over-cast") {
            document.getElementById('currclimate').src = "/climate images/overcast.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "partly cloudy") {
            document.getElementById('currclimate').src = "/climate images/partlycloudy.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "sunny") {
            document.getElementById('currclimate').src = "/climate images/sunny.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "storm") {
            document.getElementById('currclimate').src = "/climate images/storm.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "haze") {
            document.getElementById('currclimate').src = "/climate images/haze.png";
            document.getElementById('currclimate').style.display = "block";
        }
        else if (weather === "drizzle") {
            document.getElementById('currclimate').src = "/climate images/drizzle.png";
            document.getElementById('currclimate').style.display = "block";
        }

        
    }


//     Application name	Beat the Heart
// API key	edca08901d4829bd25ff28030f778f4c
// Shared secret	9176828cad22afcbc52a8e670ba60e8b
// Registered to	mohan48