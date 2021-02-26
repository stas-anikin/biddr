import React from "react";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="Welcome">
        <h1>
        Welcome to the next best thing since Sotheby's!
          Go Biddr!
        </h1>
      </main>
    );
  }
}
