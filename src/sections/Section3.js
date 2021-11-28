import React from 'react';

const styles = {
    textArea: {
        display: 'flex',
        color: '#606462',
        fontSize: '25px',
        textShadow: '2px 2px 4px white',
        width: '50%',
        padding: '20px'
    },

    textArea2: {
        position: 'absolute',
        fontSize: '20px',
        color: '#178260',
        textShadow: '2px white',
        top: '170%',
        left: '45%'
        
    },

    textArea3: {
        position: 'absolute',
        textShadow: '1 px white',
        color: '606462',
        fontSize: '15px',
        left: '70%',


    }
}



function Section3() {
    return (
        <div className="section">

            <h1 style={styles.textArea}><i>"When the workload is too much,
                you'll need some effective back up. That's where ReWORX comes in."</i>
            </h1>
            <h2 style={styles.textArea2}>- Ryan Gerome Regis, Ralph Santolorin and Ronald Velarde</h2>
            <p style={styles.textArea3}>ReWORX Founder and Co-Founder</p>

        </div>
    )
}

export default Section3;
