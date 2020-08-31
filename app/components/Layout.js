import React from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4F6D7A"
        },
        secondary: {
            main: "#EC9A29",
            contrastText: "#FFFAFB"
        }
    },
    overrides: {
        MuiOutlinedInput: {
            root: {
                '& $notchedOutline': {
                    borderColor: '#FFFAFB',
                    borderWidth: 2
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: '#EC9A29',
                    borderWidth: 2
                }
            }
        },
        MuiInputBase: {
            input: {
                color: "#FFFFFF",
                fontFamily: "roboto_condensedregular",
                fontSize: 18
            }
        },
        MuiFormLabel: {
            root: {
                color: "#EC9A29"
            }
        }
    }
});

const Layout = props => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}

            <style jsx global>{`
                @font-face {
                    font-family: 'righteousregular';
                    src: url('/fonts/righteous-regular-webfont.woff2');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }

                @font-face {
                    font-family: 'montserrat_alternatesregular';
                    src: url('/fonts/montserratalternates-regular-webfont.woff2');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }

                @font-face {
                    font-family: 'roboto_condensedregular';
                    src: url('/fonts/robotocondensed-regular-webfont.woff2');
                    font-weight: normal;
                    font-style: normal;
                    font-display: swap;
                }

                body {
                    margin: 0;
                }
            `}</style>
        </ThemeProvider>
    )
}

export default Layout;
