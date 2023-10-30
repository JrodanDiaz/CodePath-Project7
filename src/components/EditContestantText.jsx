export default function EditContestantText({
  field,
  currentContestant,
  setUpdatedContestant,
}) {
  const formattedField = field.toLowerCase();

  const handleEditText = (e) => {
    const updatedContestant = {
      ...currentContestant,
      [formattedField]: e.target.value,
    };
    setUpdatedContestant(updatedContestant);
  };
  return (
    <h1>
      <span>{field}:</span>
      <input
        type="text"
        className="edit-input"
        defaultValue={currentContestant[formattedField]}
        onChange={handleEditText}
      ></input>
    </h1>
  );
}
