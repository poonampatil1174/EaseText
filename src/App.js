import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";

function App() {
  return (
    <>
      <Navbar title="EaseText" abouttext="About us" />
      <div className="container my-3">
      <Textform heading="Enter the text here to analyze"/>
      </div>
    </>
  );
}

export default App;
