import React from "react";

const DeliveryProcess = props => {
  return (
    <div className={"col-sm process-panel " + props.processStep}>
      <div className="process-visual">
        <span className="process-icon"></span>
        <i className={props.processIcon}></i>
      </div>
      <div className="process-content">
        <h5>{props.processContent.step}</h5>
        <p>{props.processContent.description}</p>
      </div>
    </div>
  );
};
export default DeliveryProcess;
