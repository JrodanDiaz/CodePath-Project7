import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../supabase";
import ContestantImage from "../components/ContestantImage";
import DeleteButton from "../components/DeleteButton";
import EditContestantRadio from "../components/EditContestantRadio";
import EditContestantText from "../components/EditContestantText";
const styleItems = ["Physical", "Occult"];
const magicItems = ["Combustion", "Black Orb", "Healing Whispers"];
const stanceItems = ["Boxing", "Grappling", "Counter"];
const textFields = ["Name", "Weapon", "Phobia"];

export default function ContestantDetails({ editMode }) {
  const [currentContestant, setCurrentContestant] = useState(null);
  const [updatedContestant, setUpdatedContestant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchContestantByID();
  }, []);

  const fetchContestantByID = async () => {
    const { data } = await supabase.from("Contestants").select().eq("id", id);
    setCurrentContestant(data[0]);
  };

  const updateContestantByID = async () => {
    const { error } = await supabase
      .from("Contestants")
      .update({ ...updatedContestant })
      .eq("id", id);
    if (error) {
      console.error(error);
    }
  };

  const handleUpdate = () => {
    if (isValidUpdate) {
      updateContestantByID();
      window.location = "/contestants";
    } else {
      console.log(`ERROR: Invalid Update`);
      alert("ERROR: Invalid Update Parameters");
    }
  };

  const isValidUpdate = () => {
    const updatedValues = Object.values(updatedContestant);
    console.log(updatedValues);
    const emptyValues = updatedValues.filter(
      (value) => value === null || value === ""
    );
    return emptyValues.length === 1;
  };

  return (
    <>
      {currentContestant && (
        <div className="ContestantDetails">
          <h1>CONTESTANT SUMMARY</h1>
          <div className="ContestantDetails-Body">
            <div className="ContestantDetails-Text">
              {editMode ? (
                <>
                  {textFields.map((field) => (
                    <EditContestantText
                      key={field}
                      currentContestant={currentContestant}
                      setUpdatedContestant={setUpdatedContestant}
                      field={field}
                    />
                  ))}

                  <h1>
                    <span>Style:</span>
                    <EditContestantRadio
                      currentContestant={currentContestant}
                      setCurrentContestant={setCurrentContestant}
                      updatedContestant={updatedContestant}
                      setUpdatedContestant={setUpdatedContestant}
                      field="style"
                      items={styleItems}
                      vertical={false}
                    />
                  </h1>
                  {currentContestant.style === "Physical" && (
                    <h1>
                      <span>Stance:</span>
                      <EditContestantRadio
                        currentContestant={currentContestant}
                        setCurrentContestant={setCurrentContestant}
                        updatedContestant={updatedContestant}
                        setUpdatedContestant={setUpdatedContestant}
                        field="stance"
                        items={stanceItems}
                        vertical={true}
                      />
                    </h1>
                  )}
                  {currentContestant.style === "Occult" && (
                    <h1>
                      <span>Magic:</span>
                      {
                        <EditContestantRadio
                          currentContestant={currentContestant}
                          setCurrentContestant={setCurrentContestant}
                          updatedContestant={updatedContestant}
                          setUpdatedContestant={setUpdatedContestant}
                          field="magic"
                          items={magicItems}
                          vertical={true}
                        />
                      }
                    </h1>
                  )}
                  <div>
                    <div className="DetailsBtnContainer">
                      <button onClick={handleUpdate} className="primary-btn">
                        Update
                      </button>
                      <DeleteButton id={id} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1>
                    <span>Name:</span> {currentContestant.name}
                  </h1>
                  <h1>
                    <span>Weapon:</span> {currentContestant.weapon}
                  </h1>
                  <h1>
                    <span>Phobia:</span> {currentContestant.phobia}
                  </h1>
                  <h1>
                    <span>Style:</span> {currentContestant.style}
                  </h1>
                  {currentContestant.stance && (
                    <h1>
                      <span>Stance:</span> {currentContestant.stance}
                    </h1>
                  )}
                  {currentContestant.magic && (
                    <h1>
                      <span>Magic:</span> {currentContestant.magic}
                    </h1>
                  )}
                  <div className="DetailsBtnContainer">
                    <Link to={`/contestants/edit/${id}`}>
                      <button className="primary-btn">EDIT</button>
                    </Link>
                    <DeleteButton id={id} />
                  </div>
                </>
              )}
              {/* END OF TERNARY */}
            </div>

            <div className="ContestantDetails-Img">
              <ContestantImage name={currentContestant.name} layered={false} />
            </div>
            <div className="ContestantDetails-Strength">
              {currentContestant.style === "Physical" && (
                <>
                  <h1>
                    Your <span>Physical</span> power and technique will make it
                    easy to disarm those that try to harm you.
                  </h1>
                </>
              )}
              {currentContestant.style === "Occult" && (
                <>
                  <h1>
                    Your affinity with the <span>Occult</span> allows you to
                    keep your enemies at a distance. Unless they too know magic,
                    it will be nearly impossible for others to get too close to
                    you.
                  </h1>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
