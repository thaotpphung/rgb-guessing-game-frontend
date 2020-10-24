import React from "react";

const Stripe = ({onEasyModeChange, onHardModeChange}) => {
    return (
        <div className="stripe">
            <button onClick={onEasyModeChange}>Easy</button>
            <button onClick={onHardModeChange}>Hard</button>
        </div>
    );
}



export default Stripe;
