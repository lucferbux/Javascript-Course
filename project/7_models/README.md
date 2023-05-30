# Modelos

Dentro de la definición de modelos tenemos dos apartados. El primero son las interfaces, que definirán la estructura de los datos que recibimos de la API y que permitirá manipular los datos de una forma más sencilla.

```javascript
export interface WeatherResponse {
    weather: [Weather];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    name: string;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number
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
```

El segundo apartado son la definición de constantes que nos permitirán mapear los datos de la API con los iconos que tenemos en la carpeta de assets. En particular esto se puede realizar mediante la transformación `keyof typeof`, convirtiendo el tipo de dato en un array de strings con los nombres de las propiedades del objeto.

```javascript
export const WeatherIcon = {
    "01d": sunny,
    "01n": sunny,
    "02d": clearCloudy,
    "02n": clearCloudy,
    "03d": cloudy,
    "03n": cloudy,
    "04d": mostlyCloudy,
    "04n": mostlyCloudy,
    "09d": showers,
    "09n": showers,
    "10d": drizzle,
    "10n": drizzle,
    "11d": thunderstroms,
    "11n": thunderstroms,
    "13d": snow,
    "13n": snow,
    "50d": foggy,
    "50n": foggy,
} as const;

export const DayOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

export type WeatherIcontype = keyof typeof WeatherIcon;
```