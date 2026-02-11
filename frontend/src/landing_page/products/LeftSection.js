import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-5">
          <img src={imageURL} className="mb-5"/>
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-4 mt-3">
          <h1 className="text-muted fs-2 mb-3 p-1">{productName}</h1>
          <p className="text-muted fs-5 p-2">{productDescription}</p>
          <div className="p-1">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-4 p-1">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "40px" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
