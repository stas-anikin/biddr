import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Auction } from "../api/auction";

export const AuctionIndexPage = () => {
    
    const [auctionIndex, setAuctionIndex] = useState({
        auctions: [],
        isLoading: true
      })

    useEffect(() => {
        Auction.all().then(auctions => {
          setAuctionIndex({ auctions, isLoading: false });
        });
      }, []);

    return (
        <main>
            <h2 className="ui horizontal divider header" >Auctions</h2>
            <ul className="ui list" >
                {auctionIndex.auctions.map(auction => (
                    <li className="item" key={auction.id}>
                        <Link
                            to={`/auctions/${auction.id}`}
                            className="ui link"
                            href=""
                        >
                            {auction.title}
                        </Link>
                        <p>Posted on
                            
                            {auction.created_at.toLocaleString()}
                           
                        </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
