import React from "react";

const Spinner = props => (
  <div className="ui segment spinner">
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
);
export default Spinner;
