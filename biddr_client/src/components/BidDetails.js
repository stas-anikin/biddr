import React from "react";
function BidDetails(props) {
  return (
    <div>{props.author.first_name} {props.author.last_name} bid ${props.amount} at {" "}
      {props.created_at}
    </div>
  );
}

export default BidDetails;
