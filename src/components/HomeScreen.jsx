import Gallery from "../assets/gallery.png";

export default function HomeScreen() {
  return (
    <>
      <div className="HomeScreen">
        <div className="HomeScreen-body">
          <h1>TERMINA IS UPON US</h1>
          <h2>
            Use the <span>Contestant Creator</span> to create a new contestant,
            so that the festival may begin...
          </h2>
          <img src={Gallery} id="contestants" />
        </div>
      </div>
    </>
  );
}
