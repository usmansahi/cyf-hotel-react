import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerInfo, setcustomerInfo] = useState(null);
  useEffect(() => {
    if (id > 0) {
      //  fetch(`https://cyf-react.glitch.me/delayed`);
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(response => response.json())
        .then(data => setcustomerInfo(data));
    }
  }, [id]);
  //coomet
  return (
    <div>
      {id && customerInfo
        ? `Customer Profile ${customerInfo.id} customer Email : ${customerInfo.email} 
        is the customer VIP : ${customerInfo.vip} customer phoneNumber : ${customerInfo.phoneNumber}`
        : ""}
      {"Lodding... "}
    </div>
  );
};

export default CustomerProfile;
