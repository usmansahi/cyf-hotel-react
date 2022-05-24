import React, { useState } from "react";
import moment from "moment";
import SearchButton from "./SerachButton";
const RowInfo = props => {
  const [isSelected, setItSelected] = useState(false);
  function handleClick() {
    setItSelected(!isSelected);
  }
  const checkIn = moment(props.booking.checkInDate);
  const checkOut = moment(props.booking.checkOutDate);
  const nightsCalculation = checkOut.diff(checkIn, "days");
  return (
    <tr onClick={handleClick} className={isSelected ? "highlight" : ""}>
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{nightsCalculation}</td>
      <td>
        <SearchButton
          onClick={() => props.changeCustomerId(props.booking.id)}
          buttonText="Customer profile"
        />
      </td>
    </tr>
  );
};

export default RowInfo;
