import React, { useState } from "react";
import "../burger.scss";

const BurgerMenu = () => {
  const [status, setStatus] = useState("open");
  return (
    <div
      className="BurgerMenu-container"
      role="button"
      onClick={() => setStatus(status === "open" ? "close" : "open")}
    >
      <i className={status}></i>
      <i className={status}></i>
      <i className={status}></i>
    </div>
  );
};

export default BurgerMenu;
