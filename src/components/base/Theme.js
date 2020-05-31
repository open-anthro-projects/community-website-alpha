import { createMuiTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { dark } from '@material-ui/core/styles/createPalette';
import { grey } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

const lightTheme = {
  palette: {
    primary: {
      light: '#faffff',
      main: '#f9f9f9',
      dark: '#f1f1f1',
    },
    secondary: blue,
    background: {
      paper: '#f9f9f9',
    }
  },
};

const dark2Theme = {
  palette: {
    primary:{
      light: '#202020',
      main: '#181818',
      dark: '#0f0f0f',
    },
    secondary: blue,
    background:{
      paper: '#181818',
    },
    type: 'dark',
    },
};

/*export const Theme = () => {
  const [theme , setTheme] = useState(lightTheme)

  const {palette: {type}} = theme;
  const toggleDarkTheme = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light'
      }
    }
    setTheme(updatedTheme)
  }
  return [theme, toggleDarkTheme]
}*/

export const Theme = () => {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? dark2Theme.palette : lightTheme.palette;
  const darkTheme = createMuiTheme({
    palette: palletType,

  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  
  return [darkTheme, handleThemeChange]
}