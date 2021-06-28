// Style import
import { getWeather } from './networking/weather'
import './styles/main.scss'

export const displayWeather = async () => {
    const weather = await getWeather("London");
}

document.addEventListener('click', displayWeather);