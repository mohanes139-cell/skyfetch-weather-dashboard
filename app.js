const apiKey = "8700b9af8a32a4b2b24d5969ebe5ae49";

function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
        .then(function(response) {

            const data = response.data;

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + " °C";
            document.getElementById("description").innerText = data.weather[0].description;

            const iconCode = data.weather[0].icon;
            document.getElementById("icon").src =
                `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        })
        .catch(function(error) {

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Error fetching weather data");
            }

        });
}