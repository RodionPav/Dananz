import Home from "./page/Home/Home";
import "./assets/scss/app.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import About from "./page/About/About";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home />
          {/* <About/> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
