import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-4">
          <img src="media/images/largestBroker.svg" alt="Borker" />
        </div>
        <div className="col-6 p-4 mt-5">
          <h1>Larget stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha contribute to over the 15% of all teh retail
            order volumes in india dialy by traiding and invesing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p> Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivative</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p> Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds & Govt. security</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="image"
            style={{ width: "99%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
