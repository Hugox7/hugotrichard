import React from 'react';

const Progress = ({ text, percentage }) => {

    const styles = {
        progress: {
            height: '80px',
            width: '100%',
        },
        text: {
            fontFamily: 'Noto Sans',
            color: '#383838',
            margin: '0px 0px 5px 0px',
        },
        progressBarContainer: {
            width: '100%',
            height: '25px',
            backgroundColor: '#f3f3f3',
        },
        progressBar: {
            height: '100%',
            width : `${percentage}%`,
            backgroundColor: '#ffb356',
        },
    }

    return (
        <div style={styles.progress}>
            <p style={styles.text}>{text}</p>
            <div style={styles.progressBarContainer}>
                <div style={styles.progressBar}></div>
            </div>
        </div>
    );
}

export default Progress;