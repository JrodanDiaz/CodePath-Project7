export default function CreationRadioStyle({
  setContestant,
  toggleIsMagicActive,
  field,
  items,
  horizontal,
}) {
  const playstyleName = field;

  const handleChange = (e) => {
    if (field === "magic" || field === "Occult") {
      toggleIsMagicActive(true);
    } else {
      toggleIsMagicActive(false);
    }
    setContestant((prevContestant) => {
      return { ...prevContestant, [field]: e.target.value };
    });
  };

  return (
    <>
      <div className={`CreationStyle ${horizontal ? `flex-row` : ``}`}>
        {items.map((style) => {
          return (
            <label htmlFor={style} key={style} className="CreationStyle-label">
              <input
                type="radio"
                name={playstyleName}
                value={style}
                onChange={handleChange}
              />
              {style}
            </label>
          );
        })}
      </div>
    </>
  );
}
