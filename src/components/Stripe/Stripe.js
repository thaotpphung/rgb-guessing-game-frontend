import React from 'react';
import './Stripe.css';

const Stripe = ({ isEasyMode, onEasyModeChange, onHardModeChange}) => {
  
  
  return (
    <div id="stripe">
      <button id="reset">New Colors</button>
      <span id="message"></span>
      <button
        className= {isEasyMode ? "mode selected" : "mode"} 
        onClick={onEasyModeChange}>Easy
      </button>
      <button 
        className= {isEasyMode ? "mode" : "mode selected"} 
        onClick={onHardModeChange}>Hard
      </button>
    </div>
  );
}

export default Stripe;
