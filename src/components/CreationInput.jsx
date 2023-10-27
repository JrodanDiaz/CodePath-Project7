/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CreationInput({ field, setContestant }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const uppercaseText = e.target.value.toUpperCase();
    setInput(uppercaseText);
    const formattedField = field.toLowerCase();
    setContestant((prevContestant) => {
      return {
        ...prevContestant,
        [formattedField]: uppercaseText,
      };
    });
  };

  return (
    <>
      <div className="CreationInput">
        <div className="CreationInput-body">
          <h1>{field}:</h1>
          <input
            type="text"
            value={input}
            className="txt-input"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
