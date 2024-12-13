import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "-",
        temp: "-",
        tempMin: "-",
        tempMax: "-",
        humidity: "-",
        feelsLike: "-",
        weather: "-",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}