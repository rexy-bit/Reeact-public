import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import {getWeatherFromApi} from '../apiFetch'
export default function WeatherInputs(props){

    
    

    async function getWeather(formData){
        const searchCity = formData.get("city");

        if(!searchCity){
            return;
        }


        props.setCity(searchCity);
        const weather = await getWeatherFromApi(searchCity);
        console.log('Weather is : ', weather);
        props.setWeather(weather);
    }

   

    return(

        <form action={getWeather}>

            <input 
            type="text" 
            className="in" 
            name="city"
            placeholder="e.g. Rome"

            />

            <button className="search-button"
            >
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
            </button>
        </form>
    );
}