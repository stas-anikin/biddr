
const BASE_URL = `http://localhost:3000/api/v1`;

const Auction = {
  all() {
    return fetch(`${BASE_URL}/auctions`, {
      credentials: "include"
    }).then(res => res.json());
  },

  one(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },

  create(params) {

    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  update(id, params) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};
const Bid = {

  create(id, params) {

    return fetch(`${BASE_URL}/auctions/${id}/bids`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};
const Publish = {

  create(id, params) {

    return fetch(`${BASE_URL}/auctions/${id}/publishings`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};
const Reserve = {

  create(id, params) {

    return fetch(`${BASE_URL}/auctions/${id}/reservings`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

const Session = {
  create(params) {

    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json());
  }
};

export { Auction, Bid, Session, User, Publish, Reserve };
