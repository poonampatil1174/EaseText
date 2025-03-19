import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar title="EaseText" abouttext="About" />
      <div className="container my-3">
      <Textform heading="Enter the text here to analyze"/>
      <About/>
      </div>
    </>
  );
}

export default App;
