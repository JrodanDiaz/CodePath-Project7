import { useEffect, useState } from "react";
import supabase from "../supabase";
import CreationInput from "../components/CreationInput";
import CreationRadioInput from "../components/CreationRadioInput";
import CreationRadioStyle from "../components/CreationRadioStyle";
import ContestantImage from "../components/ContestantImage";

const inputFields = ["Weapon", "Phobia"];
const playstyles = ["Physical", "Occult"];
const stances = ["Boxing", "Grappling", "Counter"];
const spells = ["Combustion", "Black Orb", "Healing Whispers"];

export default function Creation() {
  const [magicIsActive, toggleMagicIsActive] = useState(false);
  const [contestant, setContestant] = useState({
    name: null,
    weapon: null,
    phobia: null,
    style: null,
    stance: null,
    magic: null,
  });

  useEffect(() => {
    toggleMagicOrStance();
  }, [contestant.stance, contestant.magic]);

  const createContestant = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("Contestants").insert(contestant);
    if (error) {
      console.error(error);
    }

    window.location = "/contestants";
  };

  //ensures that if either stance or magic has a value, then the other must be empty
  const toggleMagicOrStance = () => {
    if (contestant.magic != null && contestant.stance != null) {
      const updatedContestant = { ...contestant };
      if (magicIsActive) {
        updatedContestant.stance = "";
        toggleMagicIsActive(false);
      } else {
        updatedContestant.magic = "";
      }
      setContestant(updatedContestant);
    }
  };

  return (
    <>
      <div className="Creation">
        <h1>CREATION IS UPON YOU</h1>
        <div className="Creation-body">
          <div className="Creation-input-container">
            <CreationRadioInput setContestant={setContestant} />
          </div>

          {/* Conditionally Render Image */}
          {contestant.name && (
            <div className="Creation-img-container">
              <ContestantImage name={contestant.name} layered={true} />
            </div>
          )}

          <div className="Creation-input-container">
            {inputFields.map((field) => (
              <CreationInput
                field={field}
                setContestant={setContestant}
                key={field}
              />
            ))}
            <CreationRadioStyle
              setContestant={setContestant}
              field={"style"}
              items={playstyles}
              horizontal={true}
              toggleIsMagicActive={toggleMagicIsActive}
            />
            {contestant.style === "Physical" && (
              <CreationRadioStyle
                setContestant={setContestant}
                field={"stance"}
                items={stances}
                horizontal={false}
                toggleIsMagicActive={toggleMagicIsActive}
              />
            )}

            {contestant.style === "Occult" && (
              <CreationRadioStyle
                setContestant={setContestant}
                field={"magic"}
                items={spells}
                horizontal={false}
                toggleIsMagicActive={toggleMagicIsActive}
              />
            )}
            <form onSubmit={createContestant}>
              <button type="submit" id="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
