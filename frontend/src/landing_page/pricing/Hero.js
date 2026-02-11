import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center mt-5 p-2 mb-5">
        <h1 className="fs-2">Charges</h1>
        <h3 className="text-muted fs-5">List of all charges and taxes</h3>
      </div>
      <div className="row mt-5">
        <div className="col-4 p-3 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3 text-muted">Free equity delivery</h1>
          <p className="text-muted" style={{ lineHeight: 1.5 }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3 text-muted">Intraday and F&O trades</h1>
          <p className="text-muted " style={{ lineHeight: 1.5 }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-3 text-muted">Free direct MF</h1>
          <p className="text-muted " style={{ lineHeight: 1.5 }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
