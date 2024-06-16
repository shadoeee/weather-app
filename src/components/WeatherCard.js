import React from 'react';
import { Card, CardContent, Typography, useTheme  } from '@mui/material';

const WeatherCard = ({ data }) => {
  const date = new Date();
  const theme = useTheme();

  const cardStyle = {
    flex: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    color: theme.palette.mode === 'dark' ? 'black' : 'white',
    borderRadius:'20px'
  };
   const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card style={cardStyle}>
      <CardContent style={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold'}}>
          {date.toLocaleDateString('en-US', { weekday: 'long' })}
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold'}}>
          {date.toLocaleDateString()}
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: 'bold'}}>
          {data.name}, {data.sys.country}
        </Typography>
        <Typography variant="h1" style={{ fontWeight: 'bold'}}>
          {Math.round(data.main.temp)}°C
        </Typography>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          {capitalizeFirstLetter(data.weather[0].description)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
