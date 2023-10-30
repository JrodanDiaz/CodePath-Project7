import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Creation from "./pages/Creation";
import ContestantGallery from "./pages/ContestantGallery";
import ContestantDetails from "./pages/ContestantDetails";
import supabase from "./supabase";
import "./App.css";

function App() {
  const [databaseContestants, setDatabaseContestants] = useState([]);

  const fetchContestants = async () => {
    const { data } = await supabase
      .from("Contestants")
      .select()
      .order("created_at", { ascending: false });
    setDatabaseContestants(data);
  };

  //create a useEffect that fetches the databaseContestants when the :id route is loaded

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creation" element={<Creation />} />
            <Route
              path="/contestants"
              element={
                <ContestantGallery
                  databaseContestants={databaseContestants}
                  setDatabaseContestants={setDatabaseContestants}
                  fetchContestants={fetchContestants}
                />
              }
            />
            <Route
              path="/contestants/:id"
              element={<ContestantDetails editMode={false} />}
            />
            <Route
              path="/contestants/edit/:id"
              element={<ContestantDetails editMode={true} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
