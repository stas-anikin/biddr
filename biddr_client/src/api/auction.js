import { baseUrl } from "../config";

export const Auction = {
  // Fetch all auctions from server
  all() {
    return fetch(`${baseUrl}/auctions`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Fetch a single auction
  one(id) {
    return fetch(`${baseUrl}/auctions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // Create an auction
  create(params) {
    // params is an object that reperesents a auction
    return fetch(`${baseUrl}/auctions`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
  
};
