import React, { Component } from "react";

import { Auction } from "../api/auction";

export class AuctionNewPage extends Component {
  createAuction = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newAuction = {
        title: fd.get("title"),
        body: fd.get("body"),
        end_date: fd.get("end_date"),
        reserve_price: fd.get("reserve_price")
    };

    Auction.create(newAuction).then(data => {
      if (!data.errors) {
        this.props.history.push(`/auctions/${data.id}`);
      }
    });

    currentTarget.reset();
  };
  render() {
    return (
      <form
        className="NewAuctionForm ui form"
        onSubmit={event => this.createAuction(event)}
      >
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Title" />
        </div>
        <div className="field">
          <label htmlFor="body">Description</label>
          <textarea name="body" id="body" rows="3" placeholder="Describe item." />
        </div>
        <div className="field">
            <label htmlFor="end_date">End Date</label>
            <input type="date" name="end_date" id="end_date" />
        </div>
        <div className="field">
          <label htmlFor="reserve_price">Reserve Price</label>
          <textarea type="number" name="reserve_price" id="reserve_price" rows="3" placeholder="$100" />
        </div>
        <button className="ui orange button" type="submit">
          Create Auction
        </button>
      </form>
    );
  }
}
