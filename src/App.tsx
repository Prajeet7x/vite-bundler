import Navbar from "../src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
