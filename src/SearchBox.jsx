import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try{
        let response = await fetch(
          `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonRespose = await response.json();
        let result = {
          city: city,
          temp: jsonRespose.main.temp,
          tempMin: jsonRespose.main.temp_min,
          tempMax: jsonRespose.main.temp_max,
          humidity: jsonRespose.main.humidity,
          feelsLike: jsonRespose.main.feels_like,
          weather: jsonRespose.weather[0].main,
        };
        return result;
    } catch (err) {
        throw(err);
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try{
        evt.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
    } catch (err){
        setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit} className="SearchArea">
        <span>
          <TextField
            onChange={handleChange}
            id="city"
            label="City"
            variant="outlined"
            required
            value={city}
            size="small"
          />
        </span>
        
        <span>
          <Button variant="contained" type="Submit">
            Search
          </Button>
        </span>
      </form>
      {error && <p style={{color:"red"}}>City not found</p>}
    </div>
  );
}
