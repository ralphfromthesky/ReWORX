import React from 'react';
import { Box, Typography, ThemeProvider } from '@mui/material';
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

    quote: {
        width: '90%',
        height: '50%',
        paddingRight: 'clamp(50px,20%,200px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    from: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
}));

const styles = {
  
    textArea: {
        
        height: '60vh',
        display: 'flex',
        paddingTop: '15%',
        color: '#606462',
        fontSize: '25px',
        textShadow: '2px 2px 4px white',
        width: '65%',
        padding: '5%',
      

    },

    textArea2: {
        
        display: 'flex',
        paddingRight: '10%',
        textAlign: 'right',
        justifyContent: 'right',
        fontSize: '30px',
        color: '#178260',
        textShadow: '1px 1px 2px white',


    },

    textArea3: {
       
        display: 'flex',
        paddingRight: '10%',
        textAlign: 'right',
        justifyContent: 'right',
        textShadow: '1px 1px 2px white',
        color: '606462',
        fontSize: '25px',


    }
}



function Section3() {
    const classes = useStyles();
    return (
        <div id="section-3" className="section section-3"> 

            {/* <h1 style={styles.textArea}><i>"When the workload is too much,
                you'll need some effective back up. That's where ReWORX comes in."</i>
            </h1>
            <h2 style={styles.textArea2}>- Ryan Gerome Regis, Ralph Santolorin and Ronald Velarde</h2>
            <p style={styles.textArea3}>ReWORX Founder and Co-Founder</p> */}



            <div style={styles.textArea}>
                <h1>
                    "When the workload is too much,
                    you'll need some effective back up. That's where ReWORX comes in."
                </h1>
            </div>
            <div>
                <div style={styles.textArea2}>
                    - Ryan Gerome Regis, Ralph Santolorin and Ronald Velarde
                </div>
                <div style={styles.textArea3}>
                    ReWORX Founder and Co-Founder
                </div>
            </div>
        <div id="section-3" className="section section-3">
            <ThemeProvider theme={customTheme}>
                <Box className={classes.root}>
                    <Box className={classes.quote}>
                        <Typography variant="quote" className="text-shadow">
                            "When the workload is too much,
                            you'll need some effective backup.
                            That's where ReWORX comes in."
                        </Typography>
                    </Box>
                    <Box className={classes.from}>
                        <Typography variant='subquote1' className="text-shadow">
                            -  Ryan Gerome Regis, Ralph Santolorin, and Ronald Velarde
                        </Typography>
                        <Typography variant='subquote2' className="text-shadow">
                            ReWORX Founder and Co-Founders
                        </Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Section3;
