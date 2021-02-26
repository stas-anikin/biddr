import React from "react";

export const AuctionDetails = props => {
  return (
    <div className="ui segment">
        <h1 className="ui header">{props.title}</h1>
        <p>
            {props.body} <br />
        </p>
        <p>
            Current Price: ${props.reserve_price}
        </p>
        <p>
            Ends At: {props.end_date}
        </p>
    </div>
  );
};
