import Home from "./page/Home/Home";
import "./scss/app.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
