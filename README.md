# Weather data fetching app using React JS
Fetching data with the API. <br> 
This app takes your city name, asks OpenWeatherMap for current weather details, waits for the response, and then shows you the weather or tells you if the city is not found — all while keeping you informed with a loading animation.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
  <pre>
How This Weather App Works
User Input:

You start by typing the name of a city into the input box on the webpage.

When you press the "Submit" button, the app prepares to get weather information for that city.

Fetching Weather Data:

The app sends a request over the internet to a weather service called OpenWeatherMap.

This request includes the city name you entered and a secret key (called an API key) that identifies your app to the weather service.

The app also asks for the temperature in Celsius (metric units).

What the Weather Service Does:

The weather service looks up the current weather information for the city you requested.

It sends back detailed weather information like temperature, weather conditions (sunny, rainy, cloudy, etc.), and an icon representing the weather.

Receiving and Showing the Data:

When your app gets the weather data back, it temporarily stops showing a loading animation.

If the city name was valid and weather data is available:

The app displays the city’s name and country.

It shows the temperature.

It displays an icon that visually represents the current weather.

It also shows a short description, like "clear sky" or "light rain."

If the city name was invalid or the service couldn't find it:

The app shows a message saying "No data found."

User Experience:

While the weather data is being fetched, a loading animation (a small GIF) appears so the user knows something is happening.

After the data loads or an error occurs, the loading animation disappears.

The input box is cleared so the user can type another city if they want.

How the Weather API Works (in simple terms)
API (Application Programming Interface) is like a waiter in a restaurant. You (the app) tell the waiter (the API) what you want — in this case, weather info for a city.

The waiter goes to the kitchen (weather servers), gets the food (weather data), and brings it back to you.

You need to tell the waiter exactly what you want and show your ID (API key) so they know you’re allowed to get the food.

The waiter brings back the weather data in a structured format, which your app reads and shows nicely on the screen.
  </pre>
</body>
</html>
