import React, { useState, useEffect } from "react";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true",
        );
        const data = await response.json();
        const currentWeather = data.current_weather;
        setWeather(currentWeather);

        if (currentWeather.weathercode >= 80) {
          setRecommendation("The weather is bad. The windows are closed.");
        } else {
          setRecommendation(
            "The weather is good. The windows and shades are opeßn.",
          );
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeather({ error: true });
        setRecommendation("Unable to fetch weather data.");
      }
    };

    fetchWeather();
  }, []);

  // Helper to decode the weather code
  const getWeatherDescription = (code) => {
    const weatherDescriptions = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Drizzle: Light",
      53: "Drizzle: Moderate",
      55: "Drizzle: Dense",
      61: "Rain: Light",
      63: "Rain: Moderate",
      65: "Rain: Heavy",
      80: "Rain showers: Light",
      81: "Rain showers: Moderate",
      82: "Rain showers: Violent",
      95: "Thunderstorm: Slight",
      96: "Thunderstorm: Moderate",
      99: "Thunderstorm: Heavy hail",
    };
    return weatherDescriptions[code] || "Unknown weather condition";
  };

  return (
    <div className="weather-container">
      <h1>Today's Weather</h1>
      {weather ? (
        <>
          <p>
            <strong>Weather Code:</strong> {weather.weathercode} (
            {getWeatherDescription(weather.weathercode)})
          </p>
          <p>
            <strong>Temperature:</strong> {weather.temperature}°C
          </p>
          <p>{recommendation}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
