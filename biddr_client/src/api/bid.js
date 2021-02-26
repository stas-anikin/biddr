import { baseUrl } from "../config";

export const Bid = {
    create(params) {
      return fetch(`${baseUrl}/auctions/${params.auction_id}/bids`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    }
  };
  