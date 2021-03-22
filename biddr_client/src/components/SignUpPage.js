import React from "react";
import { User } from "../requests";

export function SignUpPage(props) {
  const { onSignUp } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const signUpParams = {
      first_name: fd.get("first_name"),
      last_name: fd.get("last_name"),
      email: fd.get("email"),
      password: fd.get("password"),
      password_confirmation: fd.get("password_confirmation")
    };

    User.create(signUpParams).then(res => {
      if (res.id) {
        onSignUp();
        props.history.push("/auctions");
      }
    });
  }

  return (
    <main>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Password confirmation"
            required
          />
        </div>

        <button className="ui blue button" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  );
}
