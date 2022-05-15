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
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations.
          </p>
          <a
            href="https://visitlondon.com"
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
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry
          </p>
          <a
            href="https://visitmanchester.com"
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
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding. Today it's a national cultural hub
          </p>
          <a
            href="https://peoplemakeglasgow.com"
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
