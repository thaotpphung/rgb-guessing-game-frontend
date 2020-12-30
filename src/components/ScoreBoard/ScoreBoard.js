import React, { Fragment } from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({label, entries}) => {
  return (
    <div className="ScoreBoard">
      <strong>{label}</strong>
      {entries.map((entry, index) => {
          return (
          <Fragment key={entry+index}> 
              <br/>
             {entry.title}: {entry.content}
          </Fragment>)
      })}
    </div>
  );
};

export default ScoreBoard;
