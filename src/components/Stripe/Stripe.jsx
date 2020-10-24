import React from "react";

const Stripe = ({onEasyModeChange, onHardModeChange}) => {
    return (
        <div className="stripe">
            <button id="reset">New Colors</button>
            {/* <span id="message"></span> */}
            <button onClick={onEasyModeChange} class="mode">Easy</button>
            <button onClick={onHardModeChange} class="mode selected">Hard</button>
        </div>
    );
}



export default Stripe;
