import React from "react";
function TouristInfoCards() {
  return (
    <div className="d-flex justify-content-between container">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/London_Eye_Twilight_April_2006.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h1>London</h1>
          <a
            href="visitlondon.com"
            target="blank"
            rel="noopneer noreferrer"
            className="btn btn-primary"
          >
            Go London
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Manchester_Town_Hall_from_Lloyd_St.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <a
            href="visitmanchester.com"
            target="blank"
            rel="noopneer noreferrer"
            className="btn btn-primary"
          >
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/%28looking_down%29_Buchanan_Street%2C_Glasgow.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h1>Galsgow</h1>
          <a
            href="peoplemakeglasgow.com"
            target="blank"
            rel="noopneer noreferrer"
            className="btn btn-primary"
          >
            Go Galsgow
          </a>
        </div>
      </div>
    </div>
  );
}
export default TouristInfoCards;
