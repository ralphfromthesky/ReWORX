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
        padding: '5px', 
        backgroundColor: 'green',
        fontSize: '20px',
        borderRadius: '20px',
        color: 'white',
        position: 'absolute',
        top: '80%',
        left: '40%',
        borderColor: 'silver',

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
            <input type="button" value="Outsource with us ▼" style={styles.button}></input>
        </div>
    )
}

export default Section1;
