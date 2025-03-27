import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Students from "./component/Students";
import Add from "./component/Add";
import Contect from "./component/Contect";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contect/us" element={<Contect/>}/>
          <Route path="/Add/Students" element={<Add/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;