import React from 'react';
import { Grid, Card, CardContent, Typography, useTheme } from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity'; // Humidity icon
import AirIcon from '@mui/icons-material/Air'; // Wind icon

const WeatherDetails = ({ data }) => {
  const theme = useTheme();

  const cardStyle = {
    flex: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
    color: theme.palette.mode === 'dark' ? 'black' : 'white',
    borderRadius:'20px'
  };

  return (
    <Card style={{ backgroundColor: 'transparent', color: 'white', marginTop: '16px', display: 'flex', flexDirection: 'row' }}>
      <Card style={cardStyle}>
        <CardContent>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle1" style={{ textAlign: 'center', fontWeight: 'bold' }}>Humidity: {data.main.humidity}%</Typography>
              <OpacityIcon style={{ marginTop: 5, fontSize: 50 }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card style={{ flex: 1, marginLeft: 20, ...cardStyle }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="subtitle1" style={{ textAlign: 'center', fontWeight: 'bold' }}>Wind: {data.wind.speed}km/h</Typography>
              <AirIcon style={{ marginTop: 5, fontSize: 50 }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Card>
  );
};

export default WeatherDetails;
