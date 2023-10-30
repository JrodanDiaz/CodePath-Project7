export default function EditContestantRadio({
  field,
  items,
  currentContestant,
  setCurrentContestant,
  vertical,
  updatedContestant,
  setUpdatedContestant,
}) {
  const handleEditChange = (e) => {
    const editedContestant = { ...updatedContestant };
    if (e.target.value === "Occult") {
      editedContestant.stance = null;
      setCurrentContestant({
        ...currentContestant,
        style: e.target.value,
        stance: null,
      });
    } else if (e.target.value === "Physical") {
      editedContestant.magic = null;
      setCurrentContestant({
        ...currentContestant,
        style: e.target.value,
        magic: null,
      });
    }
    setUpdatedContestant({ ...editedContestant, [field]: e.target.value });
  };

  return (
    <div className={`EditRadioContainer${vertical && `-Vertical`}`}>
      {items.map((item) => (
        <label htmlFor={item} key={item}>
          <input
            key={item}
            type="radio"
            name={field}
            value={item}
            defaultChecked={
              currentContestant &&
              Object.values(currentContestant).includes(item)
            }
            onChange={handleEditChange}
          />
          {item}
        </label>
      ))}
    </div>
  );
}
