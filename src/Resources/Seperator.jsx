import React from 'react'

function Seperator() {
    const seperatorStyle = {
        width: '100%',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const lineStyle = {
        width: '80%',
        height: '.35rem',
        backgroundColor: '#ffb804b0',
        borderRadius: '15px'
    }

    return (
        <div className='seperator' style={seperatorStyle}>
            <div className="line" style={lineStyle}></div>
        </div>
    )
}

export default Seperator
