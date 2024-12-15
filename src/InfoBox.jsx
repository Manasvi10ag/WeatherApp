import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useEffect } from "react";

export default function InfoBox({ Info }) {
  
  const VERY_COLD_URL =
    "https://images.unsplash.com/photo-1672683801680-81e5d07b5e5c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = 
    "https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwY2l0eXxlbnwwfDB8MHx8fDA%3D"
  const HOT_URL =
    "https://images.unsplash.com/photo-1527632392562-5ad5f7e698fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  useEffect(() => {
    if (Info.humidity > 80) {
      document.body.className = 'rainy';
    } else if (Info.temp > 25) {
      document.body.className = 'sunny';
    } else if (Info.temp < 0) {
      document.body.className = 'very-cold';
    } else {
      document.body.className = 'cold';
    }
  }, [Info]);

  return (  
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              Info.humidity > 80
                ? RAIN_URL
                : Info.temp < 0
                ? VERY_COLD_URL
                : Info.temp > 25
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Info.city
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}{" "}
              {Info.humidity > 80 ? (
                <ThunderstormRoundedIcon />
              ) : Info.temp > 25 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitRoundedIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>
                <div className="extraInfo">
                  <div className="spacedDetails">
                    <span><b>Temperature</b></span>
                    <span><b>{Info.temp}&deg;C</b></span>
                  </div>
                  <div className="spacedDetails">
                    <span>Humidity</span>
                    <span>{Info.humidity}</span>
                  </div>
                  <div className="spacedDetails">
                    <span>Min Temp</span>
                    <span>{Info.tempMin}&deg;C</span>
                  </div>
                  <div className="spacedDetails">
                    <span>Max Temp</span>
                    <span>{Info.tempMax}&deg;C</span>
                  </div>
                </div>
                <p>
                  The weather can be described as <i><b>{Info.weather}</b></i> and
                  feels like {Info.feelsLike}&deg;C
                </p>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
