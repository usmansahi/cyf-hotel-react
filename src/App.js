import React from "react";
import Heading from "./components/Heding";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import "./App.css";
import Footer from "./components/Footer";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        array={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
