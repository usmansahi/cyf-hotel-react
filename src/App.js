import React from "react";
import Heading from "./components/Heding";

import Bookings from "./components/Bookings";
import "./App.css";
import SearchButton from "./components/SerachButton";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>

      <Bookings />
    </div>
  );
};

export default App;
