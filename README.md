# Weather data fetching app using React JS
Fetching data with the API. <br> 
This app takes your city name, asks OpenWeatherMap for current weather details, waits for the response, and then shows you the weather or tells you if the city is not found — all while keeping you informed with a loading animation.

<img src="https://github.com/Ratankumar27/Weather-data-fetching-app-using-React-JS/blob/43771513121d2ee255648386cf986352e0ce19be/Screenshot%202025-06-11%20164459.png"/>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>

  <h2>How This Weather App Works</h2>

  <h3>User Input:</h3>
  <p>You start by typing the name of a city into the input box on the webpage.</p>
  <p>When you press the "Submit" button, the app prepares to get weather information for that city.</p>

  <h3>Fetching Weather Data:</h3>
  <p>The app sends a request over the internet to a weather service called OpenWeatherMap.</p>
  <p>This request includes the city name you entered and a secret key (called an API key) that identifies your app to the weather service.</p>
  <p>The app also asks for the temperature in Celsius (metric units).</p>

  <h3>What the Weather Service Does:</h3>
  <p>The weather service looks up the current weather information for the city you requested.</p>
  <p>It sends back detailed weather information like temperature, weather conditions (sunny, rainy, cloudy, etc.), and an icon representing the weather.</p>

  <h3>Receiving and Showing the Data:</h3>
  <p>When your app gets the weather data back, it temporarily stops showing a loading animation.</p>
  <p>If the city name was valid and weather data is available:</p>
  <ul>
    <li>The app displays the city’s name and country.</li>
    <li>It shows the temperature.</li>
    <li>It displays an icon that visually represents the current weather.</li>
    <li>It also shows a short description, like "clear sky" or "light rain."</li>
  </ul>
  <p>If the city name was invalid or the service couldn't find it:</p>
  <p>The app shows a message saying "No data found."</p>

  <h3>User Experience:</h3>
  <p>While the weather data is being fetched, a loading animation (a small GIF) appears so the user knows something is happening.</p>
  <p>After the data loads or an error occurs, the loading animation disappears.</p>
  <p>The input box is cleared so the user can type another city if they want.</p>

  <h2>How the Weather API Works (in simple terms)</h2>
  <p>API (Application Programming Interface) is like a waiter in a restaurant. You (the app) tell the waiter (the API) what you want — in this case, weather info for a city.</p>
  <p>The waiter goes to the kitchen (weather servers), gets the food (weather data), and brings it back to you.</p>
  <p>You need to tell the waiter exactly what you want and show your ID (API key) so they know you’re allowed to get the food.</p>
  <p>The waiter brings back the weather data in a structured format, which your app reads and shows nicely on the screen.</p>

</body>
</html>
