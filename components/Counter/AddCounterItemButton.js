import React from 'react';

const AddCounterItemButton = () => {

    return (
        <div className="counter_additem_wrap">
            <style jsx>{`
                .counter_additem_button {
                    transition: background-color 100ms ease,
                                box-shadow 100ms ease;
                    position: absolute;
                    bottom: 4rem;
                    right: 4rem;
                    width: calc(6rem + 20px);
                    height: calc(6rem + 20px);
                    border-radius: 50%;
                    border: none;
                    color: #fff;
                    font-size: 6rem;
                    background-color: var(--point-color);
                    cursor: pointer;
                    box-shadow: 0 0 .5rem rgba(0, 0, 0, .5);
                    opacity: 1;
                }
                .counter_additem_button:hover {
                    opacity: .85;
                    box-shadow: .2rem .2rem .5rem rgba(0, 0, 0, .5);
                }
                .counter_additem_button:active {
                    opacity: 1;
                    box-shadow: 0 0 .5rem rgba(0, 0, 0, .5);
                }
            `}</style>
            <button className="counter_additem_button">
                <span>+</span>
            </button>
        </div>
    );
}

export default AddCounterItemButton;