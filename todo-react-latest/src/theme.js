import { createTheme } from "@mui/material"

export const theme = createTheme({
    //light refers to when in light theme, dark when in dark theme
    palette: {
        primary: {
            main: '#F4F6FA',
            dark:'#8C8E93'
        },
        background: {
            default: '#23262C',
            primary: '#2E3239'
        },
        lightPrimary: {
            main: '#23262C'
        },
        lightBackground: {
            main: '#F4F6FA'
        }
    },
    typography: {
        fontFamily: 'Poppins'
    }
})