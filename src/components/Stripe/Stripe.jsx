import React from "react";
import "./Stripe.css";
import "../ButtonList/ButtonList";
import ButtonList from "../ButtonList/ButtonList";
import Button from "../ButtonList/Button/Button";


const Stripe = ({currentMode, modes, message, onButtonClick}) => {
    return (
        <div className="stripe">
            <Button
              key={10}
              modeLabel={'New Colors'}
              currentModeLabel = {currentMode.label}
              onButtonClick = {(event) => onButtonClick(event, currentMode)}
            />

            <span className="message">{message}</span>
            <ButtonList
                currentMode = {currentMode}
                modes = {modes}
                onButtonClick= {onButtonClick}
            />
        </div>
    );
}



export default Stripe;
