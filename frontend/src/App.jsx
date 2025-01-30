import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShowNotes from "./components/ShowNotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowNotes> </ShowNotes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
