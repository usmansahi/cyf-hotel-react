import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then(data => {
        setBooking(data);
      })
      .catch(error => console.log(error));
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const Bookingfilter = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBooking(Bookingfilter);
  };

  return (
    <div className="App-content">
      {bookings.length > 0 ? (
        <div className="container">
          <Search search={search} />

          {<SearchResults results={bookings} />}
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;
