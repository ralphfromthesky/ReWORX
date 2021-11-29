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



function Section1() {
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

    )
}
/* <div style={styles.textArea}>
            <h1>Strategic</h1>
            <h1>Outsourcing,</h1>
            <h1>ReWORXed.</h1>
            <input type="button" value="Outsource with us ▼" style={styles.button}></input> */
export default Section1;
