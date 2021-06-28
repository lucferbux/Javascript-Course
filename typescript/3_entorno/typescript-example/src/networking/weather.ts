import { WeatherResponse } from "../model/weatherResponse";

export const getWeather = async (city: string) :Promise<WeatherResponse> =>  {
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=ac6f213887b95d0b8171b342e702e112&units=metric", requestOptions);
    return response.json();
} 

