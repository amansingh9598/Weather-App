import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function(){
    const [weatherInfo, setWeatherInfo] = useState(
        {
        city:"Delhi",
        feelslike: 24.84,
        temp:25.05,
        tempMax:25.05,
        tempMin:25.05,
        humidity:47,
        weather:"good",
    }
    );

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Aman Singh</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}