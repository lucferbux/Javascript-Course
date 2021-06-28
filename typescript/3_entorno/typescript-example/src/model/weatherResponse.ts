export interface WeatherResponse {
    weather: Weather;
    base: string;
    main: Main;
    visibility: number;
    name: string;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}