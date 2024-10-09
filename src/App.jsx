import Home from "./page/Home/Home";
import "./assets/scss/app.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import About from "./page/About/About";
import { Routes, Route } from "react-router-dom";
import Service from "./page/Service/Service";
import Team from "./page/Team/Team";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/Team" element={<Team />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
