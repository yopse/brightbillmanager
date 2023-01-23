import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Components/Home";

import Budgetbase from "./Components/Budgetbase";
import PayingBills from "./Components/PayingBills";
import LineChart from "./Components/Graph";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="budgetbase" element={<Budgetbase></Budgetbase>}></Route>
        <Route path="payingbills" element={<PayingBills></PayingBills>}></Route>
        <Route path="payingraph" element={<LineChart></LineChart>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
