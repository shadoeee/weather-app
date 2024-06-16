import React, { useState } from 'react';
import axios from 'axios';
import { Card, Container, Grid, CardContent } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import SearchBar from './components/SearchBar';
import ToggleTheme from './components/ToggleTheme';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=527aa44c98ba58804ea87265a2d562cc&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Invalid location or error fetching data');
      setWeatherData(null);
    }
  };

  return (
    <ToggleTheme>
      <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ backgroundColor: 'rgba(17, 68, 90, 0.6)', color: 'white', padding: '20px', width: '70%',borderRadius:'20px' }}>
          <CardContent >
            <SearchBar fetchWeatherData={fetchWeatherData} />
            {error && <p>{error}</p>}
            {weatherData && (
              <Grid container style={{ width: '200%' }} >
                <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column',width:'100%' }} >
                  <WeatherCard data={weatherData} />
                  <WeatherDetails data={weatherData} />
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Container>
    </ToggleTheme>
  );
};

export default WeatherApp;
