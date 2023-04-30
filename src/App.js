import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/navbar/footer.component";
import Home from "./components/navbar/home";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/nav" element={Navbar} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );

}

export default App;
