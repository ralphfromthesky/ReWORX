import React from 'react';

const styles = {
    textArea: {
       
        display: 'flex',
        color: '#606462',
        fontSize: '40px',
        textShadow: '2px 2px 4px white',
        width: '65%',
        padding: '20px',
       
    },

    textArea2: {
      
        fontSize: '22px',
        color: '#178260',
        textShadow: '1px 1px 2px white',
       
        
    },

    textArea3: {
       
        textShadow: '1px 1px 2px white',
        color: '606462',
        fontSize: '17px',
       

    }
}



function Section3() {
    return (
        <div id="section-3" className="section section-3">

            <h1 style={styles.textArea}><i>"When the workload is too much,
                you'll need some effective back up. That's where ReWORX comes in."</i>
            </h1>
            <h2 style={styles.textArea2}>- Ryan Gerome Regis, Ralph Santolorin and Ronald Velarde</h2>
            <p style={styles.textArea3}>ReWORX Founder and Co-Founder</p>

        
            
        </div>
    )
}

export default Section3;
