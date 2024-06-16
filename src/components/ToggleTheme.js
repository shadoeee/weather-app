import React, { useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
  styled,
  Typography,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


const CustomWbSunnyIcon = styled(WbSunnyIcon)({
  color: '#FFD700', // Yellow color
  fontSize: '2rem', // Larger size
});
const CustomWbweatherIcon = styled(ThunderstormIcon)({
  color: '#f78a0e', // Yellow color
  fontSize: '2rem', // Larger size
});

const CustomNightsStayIcon = styled(NightsStayIcon)({
  fontSize: '2rem', // Larger size
});

const lightModeBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/pexels-freestockpro-1227513.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const darkModeBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/pexels-therato-3384692.jpg)`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
};

const ToggleTheme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const backgroundStyle = darkMode ? darkModeBackground : lightModeBackground;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={backgroundStyle}>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="default"
              icon={<CustomWbSunnyIcon />}
              checkedIcon={<CustomNightsStayIcon />}
              sx={{
                width: '80px',
                height: '48px',
                borderRadius: '100px',
                '& .MuiSwitch-switchBase': {
                  transform: 'translateX(28px)',
                  '&.Mui-checked': {
                    transform: 'translateX(5px)',
                  },
                },
              }}
            />
          }
          labelPlacement="start"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: darkMode ? 'white' : 'black', // Adjust label color based on mode
          }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: 16,
            left: 16,
            color: darkMode ? 'white' : 'black',
            fontSize: '25px',
            fontWeight: 'bold',
          }}
        >
          
          WeatherSearch
          {<CustomWbweatherIcon sx={{ marginLeft: '5px' }} />}
        </Typography>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ToggleTheme;
