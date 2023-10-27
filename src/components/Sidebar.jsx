import Rher from "../assets/Rher.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <div className="Sidebar-Content">
          <ul>
            <li>
              <Link to={"/"} className="sidebar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/creation"} className="sidebar-link">
                Creation
              </Link>
            </li>
            <li>
              <Link to={"/contestants"} className="sidebar-link">
                Contestants
              </Link>
            </li>
          </ul>
          <img src={Rher} alt="Rher" className="contain-img" />
        </div>
      </div>
    </>
  );
}
