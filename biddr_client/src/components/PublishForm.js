import React from "react";

function PublishForm(props) {
  function handlePublishSubmit(event) {
    const { currentTarget } = event;
    props.onSubmit(props.auction.id);

    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handlePublishSubmit}>
      <button className="ui button" type="submit">
        Publish
      </button>
    </form>
  );
}

export default PublishForm;
