import React, { useState } from 'react';
import { TextField, Button, Box, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ fetchWeatherData }) => {
  const [location, setLocation] = useState('');
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(location);
  };

  const handleInputChange = (e) => {
    setLocation(capitalizeFirstLetter(e.target.value));
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16px',
      }}
    >
      <TextField
        type="text"
        value={location}
        onChange={handleInputChange}
        placeholder="Enter city or zip code"
        variant="outlined"
        fullWidth
        sx={{
          marginBottom: '10px',
          backgroundColor: isDarkMode ? '#000000' : '#ffffff', // Black in dark mode, white in light mode
          color: isDarkMode ? '#ffffff' : '#000000', // White text in dark mode, black text in light mode
          borderRadius: '50px',
          textTransform: 'capitalize', // Capitalize the first letter in the placeholder
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            },
            '&.Mui-focused fieldset': {
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
            },
          },
          '& input': {
            textAlign: 'center', // Center text horizontally
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '10px',
            textTransform: 'capitalize', // Capitalize the first letter in the input
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '8px',
          marginTop: '-5px',
          borderRadius: '50px',
          minHeight: '56px', // same as TextField height
          backgroundColor: 'transparent',
        }}
      >
        <SearchIcon
          sx={{
            height: '100%',
            width: 'auto',
            color: isDarkMode ? '#000000' : '#ffffff', // White icon in dark mode, black icon in light mode
          }}
        />
      </Button>
    </Box>
  );
};

export default SearchBar;
