import React from "react";

import CreatedAtShow from "./CreatedAtShow";

function AuctionDetails(props) {
  return (
    <div>
      <h2>
        Up for sale is: {props.title}
      </h2>
      <p> </p>
      <h3>Description: {props.description}</h3>
      <br />
      It is auctioned off by: {props.author && props.author.full_name}
      <p>Hurry, the offer expires on: {props.end_date}</p>
      <p>Reserve price is: ${props.reserve_price}</p>
      <p>This auction is currently: {props.aasm_state}</p>
      <p>
        <CreatedAtShow created_at={props.created_at} />
      </p>
    </div>
  );
}

export default AuctionDetails;
