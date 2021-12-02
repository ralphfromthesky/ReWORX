import React from 'react';
import { Typography, Box, ThemeProvider, Button } from '@mui/material';
import customTheme from './components/Theme';

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    firstClass: {
        width: '40%',
        height: '40%'
    },
    secondClass: {
        width: '40%',
        height: '40%'
    },
    thirdClass: {
        background: 'linear-gradient(to left, #9FDC7F 15%, #178260 65%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',

    }
}

import { Box, Typography, Button, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import customTheme from './components/Theme';

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        width: '100%',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        width:'100%',
        height: '50%',
        paddingRight: '50%',
    },

    button:{
        position: 'absolute',
        bottom: '7.5%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
}));

const spanStyle = {
    background: 'linear-gradient(to right, #178260 15%, #9FDC7F 65%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
}


function Section1() {
    const classes = useStyles();
    return (


        <div className="section-1">
            <ThemeProvider theme={customTheme}>
                <Box sx={{ width: '50%', flexShrink: 0, padding: '3%' }}>
                    <Typography variant='h1' color="info.light">
                        Strategic Outsourcing, Re<span style={styles.thirdClass}>WORX</span>ed.
                    </Typography>
                </Box>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', mt: '5%', borderRadius: '20px'}}>
                    <Button variant='contained'>
                    <Typography variant='body3'>
                        Outsource With Us
                    </Typography>
                    </Button>
                </Box>

            </ThemeProvider>
            {/* <div className={styles.container}>
                <div className={styles.firstClass}>
                    <h1>Strategic Outsourcing, ReWORXed.</h1>
                </div>
                <div className={styles.secondClass}>
                    <button>Outsource With Us </button>
                </div>
            </div> */}
        </div >

                <Box className={classes.root}>
                    <Box className={classes.title}>
                        <Typography  variant="heroTitle" color="info.light">
                            Strategic <br />Outsourcing, <br />Re<span style={spanStyle}>WORX</span>ed.
                        </Typography>
                    </Box>
                    <Box className={classes.button}>
                        <Button variant="contained" sx={{borderRadius: 20}} href="#ContactUs">
                        <Typography  variant="body5" color="info.light">
                            Outsource With Us
                        </Typography>
                        </Button>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}
/* <div style={styles.textArea}>
            <h1>Strategic</h1>
            <h1>Outsourcing,</h1>
            <h1>ReWORXed.</h1>
            <input type="button" value="Outsource with us ▼" style={styles.button}></input> */
export default Section1;
