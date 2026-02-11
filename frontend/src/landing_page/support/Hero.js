import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#f1f3f5" }} className="py-5">
      <div className="container">
        <div className="bg-white rounded-3 shadow-sm p-4">
          {/* Header */}
          <div className="row align-items-center mb-4">
            <div className="col-6">
              <h2 className="fw-semibold mb-0">Support Portal</h2>
            </div>
            <div className="col-6 text-end">
              <button className="btn btn-primary px-4">My tickets</button>
            </div>
          </div>

          {/* Search */}
          <div className="row">
            <div className="col-12">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0">
                  <i className="fa-solid fa-magnifying-glass text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Eg: How do I open my account, How do I activate F&O..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
