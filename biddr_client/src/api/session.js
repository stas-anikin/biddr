import { baseUrl } from "../config";

export const Session = {
  // Create a Session
  create(params) {
    return fetch(`${baseUrl}/session`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // Destroy a Session
  destroy() {
    return fetch(`${baseUrl}/session`, {
      credentials: "include",
      method: "DELETE"
    }).then(res => res.json());
  }
};
