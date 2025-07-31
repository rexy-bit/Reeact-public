import React from "react";
import WeatherInputs from "./WeatherInputs";
import WeatherDisplay from "./WeatherDisplay";

export default function Main(){

    const [city, setCity] = React.useState(()=>{
        const saved = localStorage.getItem('city');

        return saved ? JSON.parse(saved) : 
          'Algiers'
    });

    React.useEffect(()=>{
        localStorage.setItem('city', JSON.stringify(city));
    }, [city]);

    const [weather, setWeather] = React.useState(()=>{
        const saved = localStorage.getItem('weather');

        return saved ? JSON.parse(saved) : 
           null
    });

    React.useEffect(()=>{
        localStorage.setItem('weather', JSON.stringify(weather));
    }, [weather]);


    return(
        <main>
            
            <h1>Weather App</h1>

            <WeatherInputs
            city={city}
            setCity={setCity}
            weather={weather}
            setWeather={setWeather}

            />

            <WeatherDisplay
             weather={weather}
             setWeather={setWeather}
            />
        </main>
    )
}