import React from 'react';

const PopupCounter = ({ isActivingCounter }) => {
    const CounterStyle = {
        overflow: 'hidden',
    }
    const inectiveCounterStyle = {
        ...CounterStyle,
        width: 0,
        height: "100%",
        flexGrow: 0,
        flexBasis: 0,
    }
    const activeCounterStyle = {
        ...CounterStyle,
        height: "100%",
        flexGrow: 9,
        flexBasis: 0,
    }

    return(
        <div className="popup_counter" style={isActivingCounter ? activeCounterStyle : inectiveCounterStyle}>
            <button className="exit_button" onClick={}>&times;</button>
            __name
        </div>
    );
}

export default PopupCounter;