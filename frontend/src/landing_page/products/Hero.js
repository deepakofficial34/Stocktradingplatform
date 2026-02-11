import React from 'react';

function Hero() {
    return (
      <div className="container border-bottom mb-5">
        <div className="text-center mt-5 p-5">
          <h1 className="mb-3 fs-2 text-muted">Zerodha Products</h1>
          <h3 className="mt-4 mb-4 text-muted fs-5">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mt-4 text-muted fs-6  mb-5">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              investment offerings →
            </a>
          </p>
        </div>
      </div>
    );
}

export default Hero;
