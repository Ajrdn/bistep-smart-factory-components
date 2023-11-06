import { createTheme } from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'


export const theme = createTheme({
  palette: {
    primary: {
      main: '#13243A',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            border: '1px solid #C8C8C8',
          },
        },
      },
    },
  },
})
