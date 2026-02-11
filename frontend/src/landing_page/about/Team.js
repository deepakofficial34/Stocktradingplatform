import React from "react";

function Team() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row p-5 mb-2 border-top">
        <h1 className="fs-2  text-center text-muted">People</h1>
      </div>
      <div className="row p-2  mb-5 ">
        <div
          className="col-6 text-center"
          style={{ lineHeight: "1.8", fontSize: "1.5rem" }}
        >
          <img
            src="media/images/nithinkamath.jpg"
            style={{ borderRadius: "50%", width: "50%" }}
            className="mt"
          />
          <h2 className="text-muted fs-5 mb-3 mt-3">Nithin Kamath</h2>
          <p className="text-muted fs-6  mb-3 mt-3">Founder, CEO</p>
        </div>

        <div
          className="col-6 mt-3"
          style={{ lineHeight: "1.4", fontSize: "1.5rem" }}
        >
          <p className="fs-6 text-muted p-2">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="fs-6  text-muted p-2">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="fs-6 text-muted p-2">Playing basketball is his zen.</p>
          <p className="fs-6">
            Connect on
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
