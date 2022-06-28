import { createTheme } from '@mui/material/styles';


export const lightTheme2 = createTheme({
   palette: {
      mode: 'light',
      // primary: {
      //    main: "#000000",
      //    dark: "#000000"
      // },
      secondary: {
         main: '#EC4D20',
         dark: "#DF4013",
         light: "#ef704c",
         contrastText: "#fff"
      },
      info: {
         main: "#ffc107",
         dark: "#b28704",
         light: "#ffca2c",
         // light: "#ffcd38",
      },
      text: {
         primary: '#000',
         secondary: '#000',
      }
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 576,
         md: 768,
         lg: 992,
         xl: 1200,
      },
   },
   components: {
      MuiLink: {
         defaultProps: {
            underline: 'none',
         },
         styleOverrides:{
            root:{
               ":hover":{
                  color: "#EC4D20"
               }
            }
         }
      },
      MuiListSubheader: {
         defaultProps: {
            style: { background: "#303030" }
         }
      },
      MuiAppBar: {
         defaultProps: {
            elevation: 0,
            position: 'fixed',
         },
         styleOverrides: {
            root: {
               backgroundColor: '#040404',
               height: 60,
               color: "#fff"
            },
         }
      },
      MuiTypography: {
         styleOverrides: {
            h1: {
               fontSize: 30,
               fontWeight: 600,
            },
            h2: {
               fontSize: 20,
               fontWeight: 400
            },
            h3: {
               fontSize: 18,
               fontWeight: 600,
               textTransform: 'capitalize'
            },
            subtitle1: {
               fontSize: 16,
               fontWeight: 600
            },
            subtitle2: {
               fontSize: 16,
               fontWeight: 600
            },
            subtitle3: {
               fontSize: 16,
               fontWeight: 400
            },
            root: {
               color: "#000",
            }
         }
      },

      MuiButton: {
         defaultProps: {
            variant: 'contained',
            size: 'small',
            disableElevation: true,
            color: 'secondary'
         },
         styleOverrides: {
            root: {
               textTransform: 'none',
               boxShadow: 'none',
               borderRadius: 10,
               ":hover": {
                  backgroundColor: 'secondary.dark',
                  transition: 'all 0.3s ease-in-out'
               }
            }
         }
      },


      MuiCard: {
         defaultProps: {
            elevation: 0
         },
         styleOverrides: {
            root: {
               boxShadow: '0px 5px 5px rgba(0,0,0,0.3)',
               borderRadius: '10px',
            }
         }
      }

   }
});