import React from 'react';


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
        backgroundColor: '#178260',
        fontSize: '20px',
        borderRadius: '20px',
        color: 'white',
        position: 'absolute',
        top: '110%',
        left: '100%',
        borderColor: 'silver',

    }

}



function Section1() {
    return (
        <div style={styles.textArea}>
                <h1>Strategic</h1>
                <h1>Outsourcing,</h1>
                <h1>ReWORXed.</h1>
            
            <input type="button" value="Outsource with us ▼" style={styles.button}></input>
        </div>
    )
}

export default Section1;
