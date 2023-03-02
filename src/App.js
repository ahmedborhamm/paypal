import React, { useState } from "react";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

import { BrowserRouter } from "react-router-dom";
function App() {
  const [price, setprice] = useState("");

  const onchangeprice = (e) => {
    setprice(e.target.value);
  };

  return (
    <div className="">
      <Page2 onchangeprice={onchangeprice} price={price} />
      <Page1 price={price} />
    </div>
  );
}

export default App;
