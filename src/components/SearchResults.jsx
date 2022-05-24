import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import RowInfo from "./RowInfo";

const SearchResults = props => {
  const [customerId, setcustomerId] = useState(0);
  function changeCustomerId(id) {
    setcustomerId(id);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(booking => {
            return (
              <RowInfo
                key={booking.id}
                changeCustomerId={changeCustomerId}
                booking={booking}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
