import React, { useState } from "react";
import { Input } from "@mui/material";
import "../Styles/CreditCardComp.css";
import { CreditCard } from "@mui/icons-material";

const CreditCardComp = () => {
  const [cardNumber, setCardNumber] = useState("");
  const handleChange = (e) => {
    let val = e.target.value;
    const valArray = val.split(" ").join("").split("");
    const valSpace = val.split("");
    // to work with backspace
    if (valSpace[valSpace.length - 1] === " ") {
      const valSpaceN = valSpace.slice(0, -2);
      val = valSpaceN.join("");
      setCardNumber(val);
      return;
    }

    if (isNaN(valArray.join(""))) return;
    if (valArray.length === 17) return;
    if (valArray.length % 4 === 0 && valArray.length <= 15) {
      setCardNumber(e.target.value + "  ");
    } else {
      setCardNumber(e.target.value);
    }
  };
  return (
    <div className="creditCardContainer">
      <CreditCard />
      <Input
        value={cardNumber}
        onChange={handleChange}
        placeholder="Enter card number..."
        variant="outlined"
        width={300}
        size="md"
      />
    </div>
  );
};

export default CreditCardComp;
