import supabase from "../supabase";

export default function EditButton({ id, updatedContestant }) {
  const editContestant = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("Contestants")
      .update({ updatedContestant })
      .eq("id", id);
    if (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={editContestant}>
      <button type="submit" className="primary-btn">
        EDIT
      </button>
    </form>
  );
}
