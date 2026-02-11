import React from 'react';

function Brokarage() {
    return (
      <div className="container mb-5 mt-5">
        <div className="row mt-5">
          <h1 className="fs-2 text-muted">Charges explained</h1>
          <div className="col-5 mt-4">
            <h4 className="text-muted mt-4">
              Securities/Commodities transaction tax
            </h4>
            <p className="text-muted mt-4 fs-7" style={{ lineHeight: 2 }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O. When
              trading at Zerodha, STT/CTT can be a lot more than the brokerage
              we charge. Important to keep a tab.
            </p>
            <h4 className="text-muted mt-5">Transaction/Turnover Charges</h4>
            <p className="text-muted mt-4 fs-7" style={{ lineHeight: 2 }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions. BSE has revised transaction charges in XC, XD, XT, Z
              and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
              groups have been merged into a new group X w.e.f 01.12.2017) BSE
              has revised transaction charges in SS and ST groups to ₹1,00,000
              per crore of gross turnover. BSE has revised transaction charges
              for group A, B and other non exclusive scrips (non-exclusive
              scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of
              turnover on flat rate basis w.e.f. December 1, 2022. BSE has
              revised transaction charges in M, MT, TS and MS groups to ₹275 per
              crore of gross turnover.
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-5 mt-4">
            <h4 className="text-muted mt-4">GST</h4>
            <p className="text-muted mt-4 fs-7" style={{ lineHeight: 2 }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <h4 className="text-muted mt-5">SEBI Charges</h4>
            <p className="text-muted mt-4 fs-7" style={{ lineHeight: 2 }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h4 className="text-muted mt-5">
              DP (Depository participant) charges
            </h4>
            <p className="text-muted mt-4 fs-7" style={{ lineHeight: 2 }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity. Female demat account holders (as first
              holder) will enjoy a discount of ₹0.25 per transaction on the CDSL
              fee. Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <h4 className="text-muted">Disclaimer</h4>
          <p className="text-muted mt-4">
            <i>
              For Delivery based trades, a minimum of ₹0.01 will be charged per
              contract note. Clients who opt to receive physical contract notes
              will be charged ₹20 per contract note plus courier charges.
              Brokerage will not exceed the rates specified by SEBI and the
              exchanges. All statutory and regulatory charges will be levied at
              actuals. Brokerage is also charged on expired, exercised, and
              assigned options contracts. Free investments are available only
              for our retail individual clients. Companies, Partnerships,
              Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
              delivery brokerage. A brokerage of 0.25% of the contract value
              will be charged for contracts where physical delivery happens. For
              netted off positions in physically settled contracts, a brokerage
              of 0.1% will be charged.
            </i>
          </p>
        </div>
      </div>
    );
}

export default Brokarage;
