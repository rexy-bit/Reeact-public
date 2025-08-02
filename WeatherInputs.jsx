import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";
import { getWeather } from "../apiWeather";
export default function WeatherInputs({city, setCity, weather, setWeather}){

    const [msg, setMsg] = React.useState({
        color : "red",
        show : false,
        text : ''
    });

    const [isLoading, setIsLoading] = React.useState(false);

    async function searchWeather(formData){

        const city = formData.get("city");

        if(!city){
            setMsg(prev => ({
                ...prev,
                show : true,
                text : 'Please enter a name of a city'
            }));

            setTimeout(()=>{
                setMsg(prev =>({
                    ...prev,
                    show : false
                }));
            }, 1500);

            




        }

                    setIsLoading(true);
            const newWeather = await getWeather(city);
            

            setWeather(newWeather);

            setIsLoading(false);
    }


    return(
        <form action={searchWeather}>

            <input 
            type="text" 
            className="in" 
            name="city"
            placeholder="e.g. Paris"
            />

            <button className="search-button">
              <FontAwesomeIcon icon={faMagnifyingGlassLocation}/>
            </button>

            {isLoading && 
              <p className="isLoading">...Loading</p>
            }

            {msg.show && 
              <p className="msg" style={{color : msg.color}}>{msg.text}</p>
            }
        </form>
    );
}