import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-3 p-3">
      <div className="text-center mb-5 text-muted">
        <h1 className="fs-3 mb-4 p-2">The Zerodha Universe</h1>
        <p className="text-muted fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center g-5">
        <div className="col-4">
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
              padding: "10px",
            }}
          >
            <img
              src="media/images/zerodhaFundhouse.png"
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "150px",
                objectFit: "contain",
              }}
            />
          </div>
          <p className="text-small text-muted px-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4">
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
              padding: "10px",
            }}
          >
            <img
              src="media/images/sensibullLogo.svg"
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "150px",
                objectFit: "contain",
              }}
            />
          </div>
          <p className="text-small text-muted px-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4">
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
              padding: "10px",
            }}
          >
            <img
              src="media/images/smallcaseLogo.png"
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "150px",
                objectFit: "contain",
              }}
            />
          </div>
          <p className="text-small text-muted px-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4">
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
              padding: "10px",
            }}
          >
            <img
              src="media/images/streakLogo.png"
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "150px",
                objectFit: "contain",
              }}
            />
          </div>
          <p className="text-small text-muted px-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-4">
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
              padding: "10px",
            }}
          >
            <img
              src="media/images/smallcaseLogo.png"
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "150px",
                objectFit: "contain",
              }}
            />
          </div>
          <p className="text-small text-muted px-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4">
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
              padding: "10px",
            }}
          >
            <img
              src="media/images/dittoLogo.png"
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "150px",
                objectFit: "contain",
              }}
            />
          </div>
          <p className="text-small text-muted px-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-3 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup For Free
        </button>
      </div>
    </div>
  );
}

export default Universe;
