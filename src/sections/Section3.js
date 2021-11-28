import React from 'react';

const styles = {
    textArea: {
        position: 'relative',
        color: '#606462',
        fontSize: '15px',
        textShadow: '2px 2px 4px white',
        textAlign: 'left'
    
    


    }
}



function Section3() {
    return (
        <div>
            <div className="section" style={styles.textArea}>
                <h1><i>"When the workload is too much,
                    you'll need some effective back up. That's where ReWORX comes in."</i>
                </h1>
            </div>
        </div >
    )
}

export default Section3;
