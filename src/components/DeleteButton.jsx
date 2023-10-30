import supabase from "../supabase";
export default function DeleteButton({ id }) {
  const deleteContestant = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("Contestants").delete().eq("id", id);
    if (error) {
      console.error(error);
    }
    window.location = "/contestants";
  };
  return (
    <form onSubmit={deleteContestant}>
      <button type="submit" className="primary-btn">
        Delete
      </button>
    </form>
  );
}
