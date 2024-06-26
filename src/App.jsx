import Home from "./page/Home/Home";
import "./scss/app.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./page/About/About";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <Header />
          <Home />
          {/* <About/> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
