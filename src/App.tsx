import {BrowserRouter, Route, Routes} from 'react-router-dom';

import LoginPage from "./content/login";
import {HelmetProvider} from "react-helmet-async";
import {createContext, useMemo, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {blue} from "@mui/material/colors";
import {SnackbarProvider} from "notistack";
import SidebarLayout from "./layouts/SidebarLayout";
import AddPage from "./content/add";
import HomePage from "./content/home";

export const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

export default function App() {

    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: blue[500],
                    },
                    mode,
                    ...(mode === 'dark'
                        ? {
                            primary: {
                                main: '#2196F5',
                            },
                            text: {
                                primary: '#D7D7D9',
                            },
                            background: {
                                default: '#444444',
                                paper: '#333333',
                            },
                        }
                        : {}),
                },
                typography: {
                    fontSize: 13,
                    htmlFontSize:16,
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                '&:hover': {
                                    backgroundColor: '#2E8364',
                                    color:'white'
                                },
                            },
                        },
                    },
                    MuiIconButton: {
                        styleOverrides: {
                            root: {
                                '&:hover': {
                                    backgroundColor: '#2E8364',
                                },
                            },
                        },
                    },
                    MuiListItemButton: {
                        styleOverrides: {
                            root: {
                                '&:hover': {
                                    backgroundColor: '#3C7363',
                                    color:'black'
                                },

                            },
                        },
                    },
                    MuiOutlinedInput:{
                        styleOverrides:{
                            root:{
                                borderRadius:'8px',
                            }
                        }
                    },
                    MuiTypography:{
                        styleOverrides:{
                            root:{
                                fontSize:16
                            }
                        }
                    },
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                        <CssBaseline />
                        <BrowserRouter>
                            <Routes>
                                <Route path={'/'} element={<LoginPage/>}></Route>
                                <Route path={'/login'} element={<LoginPage/>}></Route>
                                <Route path={'/sm'} element={<SidebarLayout />}>
                                    <Route path={'/sm/add'} element={<AddPage />}></Route>
                                    <Route path={'/sm/home'} element={<HomePage />}></Route>
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </SnackbarProvider>
                </HelmetProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}
