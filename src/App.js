import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import BuildPage from "./BuildPage";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/BuildPage" element={<BuildPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
