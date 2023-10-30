export default function ContestantImage({ name, layered }) {
  const presetNames = [
    "Olivia",
    "Marcoh",
    "Karin",
    "O'saa",
    "Levi",
    "Daan",
    "Marina",
    "Girl",
  ];
  if (presetNames.includes(name)) {
    return (
      <img
        src={`/${name}.png`}
        className={`${layered ? `contestant-img` : `gallery-img`}`}
      />
    );
  }
  return (
    <img
      src="/Ghoul.png"
      className={`${layered ? `contestant-img` : `gallery-img`}`}
    />
  );
}
