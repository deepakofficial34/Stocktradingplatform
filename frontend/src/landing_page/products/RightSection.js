import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container  p-5">
      <div className="row">
        <div className="col-6 p-4 mt-5 p-5">
          <h1 className="text-muted fs-2 mb-3 p-1">{productName}</h1>
          <p className="text-muted fs-5 p-2">{productDescription}</p>
          <div className="p-1">
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
