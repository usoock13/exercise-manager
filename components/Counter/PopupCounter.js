import React, { useState, useEffect } from 'react';

const PopupCounter = ({ setIsActivePopupCounter, isActivingPopupCounter, currentCounter }) => {
    const CounterStyle = {
        overflow: 'hidden',
        height: "100%",
        flexBasis: 0,
    }
    const inectiveCounterStyle = {
        ...CounterStyle,
        width: 0,
        flexGrow: 0,
    }
    const activeCounterStyle = {
        ...CounterStyle,
        flexGrow: 9,
    }
    
    const [currentTurn, setCurrentTurn] = useState(0);
    const [isClear, setIsClear] = useState(false);

    const OnClickExitButton = () => {
        setIsActivePopupCounter(false);
    }
    const ToNextTurn = () => {
        setCurrentTurn(currentTurn + 1);
    }
    const OnClickRestartButton = () => {
        setCurrentTurn(0);
        setIsClear(false);
    }

    useEffect(() => {
        if(!currentCounter.counter_array[currentTurn])
            setIsClear(true);
    }, [ currentTurn ])

    return(
        <div className="popup_counter" style={isActivingPopupCounter ? activeCounterStyle : inectiveCounterStyle}>
        <style jsx>{`
            .popup_counter .exit_button {
                display: inline;
                margin: 0 2rem;
                color: #454545;
                font-size: calc(2rem + 25px);
                font-weight: 900;
                border: 0;
                background: none;
            }
            .popup_counter_wrap {
                width: 100%;
                height: 100%;
                font-size: 3.3rem;
                text-align: center;
            }
            .popup_counter_wrap h3 {
                margin-bottom: 3.6rem;
                color: #454545;
                font-size: 1em;
                font-weight: 700;
                text-align: center;
            }
            .current_turn_number {
                transition: font-size 100ms ease;
                font-family: 'NanumSquareRound', sans-serif;
                font-size: calc(1em + 40px);
                font-weight: 900
            }
            .current_turn_viewer {
                display: inline-flex;
                max-width: 480px;
                width: 80%;
                height: 55%;
                justify-content: center;
                align-items: center;
                background-color: var(--point-background-color);
                box-shadow: 0 .3rem .65rem rgba(0, 0, 0, .12);
                border-radius: 2.4rem;
                cursor: pointer;
                user-select: none;
            }
            .current_turn_viewer:hover .current_turn_number {
                font-size: calc(.72em + 40px) !important;
            }
            .current_turn_viewer:hover {
                background-color: #d3d3ef !important;
            }
            .popup_counter_wrap .clear_text {
                color: #454545;
                font-size: calc(2rem + 30px);
                font-weight: 900 
            }
            .clear_text_wrap {
                padding-top: 4rem;
            }
            .restart_icon {
                margin-top: 3.6rem;
                background: none;
                border: 0;
                cursor: pointer
            }
            .restart_icon img {
                max-width: 100px;
                width: 20rem;
            }
        `}
        </style>
            <button className="exit_button" onClick={OnClickExitButton}>
                &times;
            </button>
            <div className="popup_counter_wrap">
                <h3>{currentCounter.counter_name}</h3>
                    {isClear
                        ?
                        <div className="clear_text_wrap">
                            <span className="clear_text">
                                clear!
                            </span>
                            <br />
                            <button className="restart_icon"
                                onClick={OnClickRestartButton}
                            >
                                <img src="/static/img/restart_icon.png" />
                            </button>
                        </div>
                        :
                        <div className="current_turn_viewer" 
                            onClick={ToNextTurn}
                        >
                            <span className="current_turn_number">
                                {currentCounter.counter_array[currentTurn] && currentCounter.counter_array[currentTurn].number}
                            </span>
                            <br />
                            <span className="current_turn_info">
                                {currentCounter.counter_array[currentTurn] && currentCounter.counter_array[currentTurn].info}
                            </span>
                        </div>
                    }
            </div>
        </div>
    );
}

export default PopupCounter;