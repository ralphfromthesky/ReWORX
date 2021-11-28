import { Button } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/material';


const styles = {
textArea: {
    color: 'white',
    fontSize: '27px',
    position: 'absolute',
    top: '20%',
    left: '10%',
},
button: {

}

}










function Section1() {
    return (
        <div>
            <div style={styles.textArea}>
                <h1>Strategic</h1>
                <h1>Outsourcing,</h1>
                <h1>ReWORXed.</h1>
            </div>
            <input type="button" value="Outsource with us"></input>
        </div>
    )
}

export default Section1;
