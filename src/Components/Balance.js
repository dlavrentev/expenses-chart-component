import React from "react";
import BalanceLogo from "../Images/balance-img.png";

export default function Balance() {
  return (
    <div className="balance-container">
      <div className="my-balance">
        <p className="my-balance-p1">My balance</p>
        <p className="my-balance-p2">$921.48</p>
      </div>
      <img
        className="balance-img"
        src={BalanceLogo}
        width="60"
        height="40"
        alt="balance-img"
      ></img>
    </div>
  );
}
