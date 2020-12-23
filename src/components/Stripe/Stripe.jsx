import React from "react";
import "./Stripe.css";

const Stripe = ({message, onEasyModeChange, onHardModeChange}) => {
    return (
        <div className="stripe">
            <button onClick={onHardModeChange} className="mode">New Colors</button>
            <span className="message">{message}</span>
            <button onClick={onEasyModeChange} className="mode">Easy</button>
            <button onClick={onHardModeChange} className="mode selected">Hard</button>
        </div>
    );
}



export default Stripe;
