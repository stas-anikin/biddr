import React from "react";
import { Link } from "react-router-dom";
import { Auction } from "../requests";
import Spinner from "./Spinner";

export class AuctionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: [],
      isLoading: true
    };
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({
        auctions: auctions,
        isLoading: false
      });
    });
  }

  deleteAuction(id) {
    Auction.destroy(id).then(() => {
      this.setState({
        auctions: this.state.auctions.filter(q => q.id !== id)
      });
    });

  }
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const { showAll = false } = this.props;
    const filteredAuction = this.state.auctions.filter((q, index) => {
      if (showAll || index < 50) {
        return true;
      }
      return false;
    });
    return (
      <main className="AuctionIndexPage">
        <h2>Currently Active Auctions</h2>
        <div
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {filteredAuction.map(auction => (
            <li className="ui segment" key={auction.id}>
              <Link to={`/auctions/${auction.id}`} className="item" href="">
                {auction.title}
              </Link>
              <p>Submitted on {auction.created_at}</p>
            </li>
          ))}
        </div>
      </main>
    );
  }
}
