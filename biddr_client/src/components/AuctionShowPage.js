// import React, { useState, useEffect } from "react";
import React, { Component } from "react";

import "./css/styles.css";
import { AuctionDetails } from "./AuctionDetails";
import { BidList } from "./BidList";
import { Auction } from "../api/auction";
// import { Bid } from '../api/bid';


class AuctionShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          auction: null,
          isLoading: true
        };
    }

    componentDidMount() {
        Auction.one(this.props.match.params.id).then(auction => {
          this.setState({ auction, isLoading: false });
        });
    }

    

    render() {
        return (
            <div className="Page">
                <AuctionDetails {...this.state.auction} />
                <BidList 
                    bids={this.state.auction.bids} 
                />
            </div>
        );
    }
};

export default AuctionShowPage;


//OTHER METHODS TRIED AND FAILED:

//     const [auctionShow, setAuctionShow] = useState({
//         auction: null,
//         isLoading: true
//     });
    

    // const createBid = event => {
    //     event.preventDefault();
    //     const { currentTarget } = event;
    //     const fd = new FormData(currentTarget);
  
    //     const newBid = {
    //         price: fd.get("price"),
    //         auction_id: auction.id
    //     };
        
    //     Bid.create(newBid).then(data => {
    //         props.history.push(`/auctions/${data.auction_id}`);  
    //     });
        
    //     currentTarget.reset();
    //     window.location.reload();
    // };

    // const currentPrice = auction => {
    //     let currentPrice = 0;
    //     auction.bids.forEach(bid => {
    //       if (bid.price > currentPrice) {
    //         currentPrice = bid.price;
    //       };
    //     });
    //     return currentPrice;
    // };

    // const checkReserve = auction => {
    //     const check = auction.bids.filter(bid => bid.price >= auction.reserve_price);
    //     if (check.length > 0) {
    //       return "Reserve price not met."
    //     } else {
    //       return "Reserve price met."
    //     }; 
    // };


//     useEffect(() => {
//         Auction.one(props.match.params.id).then(auction => { 
//             setAuctionShow({ auction, isLoading: false });
//         });
//     }, [props.match.params.id]);


//   return (
//     <main className="Page">
//         <AuctionDetails {...auctionShow.auction} />

//       <h4 className="ui header">Current Price:</h4>
    //   <p className="auction-item">${currentPrice(auctionShow.auction)}</p>
    //   <p className="auction-item">{checkReserve(auctionShow.auction)}</p> */}

    //    <form 
    //     className="ui form" 
    //     onSubmit={createBid}
    //   >
        
    //     <div className="field">
    //         <label htmlFor="price">Price</label>
    //         <input 
    //             type="number" 
    //             name="price" 
    //             id="price" 
    //             placeholder={currentPrice(auctionShow.auction)} 
    //             min={currentPrice(auctionShow.auction)}
    //         />
    //       </div>
    //       <button className="ui orange button" type="submit">
    //             Bid
    //       </button>
    //   </form> */

//       <BidList bids={auctionShow.auction.bids} />

//     </main>
//   );
// };

// export default AuctionShowPage;