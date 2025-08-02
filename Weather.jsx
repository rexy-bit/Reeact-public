import React from "react";

export default function Weather({weather, setWeather}){

    if(!weather){
        return;
    }

    const iconCode = weather.weather[0].icon;
           
       let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
       const main = weather.weather[0].main.toLowerCase();

       let backgroundColor;

       switch(main){
                           case "clear":
            backgroundColor = "#FFD700"; // Jaune soleil
            break;
        case "clouds":
            backgroundColor = "#B0C4DE"; // Gris clair
            break;
        case "rain":
            backgroundColor = "#87CEFA"; // Bleu pluie
            break;
        case "snow":
            backgroundColor = "#E0FFFF"; // Bleu pâle
            break;
        case "thunderstorm":
            backgroundColor = "#A9A9A9"; // Gris orage
            break;
        default:
            backgroundColor = "#f0f0f0"; // Par défaut
       }

    return(
        weather && 

          <div className="weather" style={{backgroundColor}}>
            <h2>{weather.name}</h2>

            <div className="others">
                <div>Desciption : {weather.weather[0].description}</div>
                <div>🌡 Temperature : {weather.main.temp}°</div>
                <div>🌬 Wind speed : {weather.wind.speed} km/h</div>
                <div>Humidity : {weather.main.humidity}</div>

                 <img src={iconUrl} alt="weather icon" width="140"/>
            </div>
          </div>
        
    );
}