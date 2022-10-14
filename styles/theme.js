import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    dark: {
      main: '#000'
    },
    white: {
      main: '#fff'
    },
    darkness: {
      main: '#212738'
    },
    cream: {
      main: '#F5F5F7'
    },
    gold: {
      main: '#FFCF53'
    },
    secondary: {
      main: '#757575',
      dark: '#00CC86'
    },
    primary: {
      main: '#212738',
      light: '#0275EB'
    }
  },
  labelContainer: {
    padding: 0,
},
}) 

export default theme
