import Home from "./page/Home/Home";
import "./assets/scss/app.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import About from "./page/About/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/Services" element={<Services />} />
            <Route path="/Teams" element={<Teams />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
