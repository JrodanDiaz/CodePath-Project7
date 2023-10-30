import { useEffect } from "react";
import ContestantCard from "../components/ContestantCard";

export default function ContestantGallery({
  databaseContestants,
  fetchContestants,
}) {
  useEffect(() => {
    fetchContestants();
  }, []);

  return (
    <>
      <div className="ContestantGallery">
        <h1>Contestant Gallery</h1>
        <div className="ContestantGallery-Body">
          {databaseContestants.length > 0 &&
            databaseContestants.map((contestant) => (
              <ContestantCard contestant={contestant} key={contestant.id} />
            ))}
        </div>
      </div>
    </>
  );
}
