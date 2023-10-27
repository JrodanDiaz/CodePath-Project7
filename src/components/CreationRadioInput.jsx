/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CreationRadioInput({ setContestant }) {
  const [contestantName, setContestantName] = useState("");

  const radioName = "radio";
  const names = [
    "Olivia",
    "Marcoh",
    "Karin",
    "O'saa",
    "Levi",
    "Daan",
    "Marina",
    "Girl",
  ];

  const handleRadioChange = (e) => {
    setContestantName(e.target.value);
    setContestant((prevContestant) => {
      return { ...prevContestant, name: e.target.value };
    });
  };

  return (
    <>
      <div className="radio-container">
        {names.map((name) => {
          return (
            <>
              <label htmlFor={name} key={name} className="radio-label">
                <input
                  type="radio"
                  name={radioName}
                  value={name}
                  checked={name === contestantName}
                  onChange={handleRadioChange}
                />
                {name}
              </label>
            </>
          );
        })}
      </div>
    </>
  );
}
