import React from "react";

export const BidDetails = props => {
  return (
    <div className="ui segment list">
        <p>
        ${props.price} on {props.created_at.toLocaleString()}
        </p>
    </div>
  );
};
