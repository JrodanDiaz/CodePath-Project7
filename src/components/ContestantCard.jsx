import { Link } from "react-router-dom";
import ContestantImage from "./ContestantImage";

export default function ContestantCard({ contestant }) {
  return (
    <Link to={`/contestants/${contestant.id}`}>
      <div className="ContestantCard">
        <ContestantImage name={contestant.name} layered={false} />
        <div>
          <h1>{contestant.name}</h1>
          <h1>{contestant.weapon}</h1>
          <h1>{contestant.phobia}</h1>
          <h1>{contestant.style}</h1>
          {contestant.stance && <h1>{contestant.stance}</h1>}
          {contestant.magic && <h1>{contestant.magic}</h1>}
        </div>
      </div>
    </Link>
  );
}
