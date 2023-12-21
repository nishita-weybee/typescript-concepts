import "./App.css";
import Notes from "./comp/Notes";

function App() {
  return (
    <div className="App">
      <Notes
        type="button"
        name="clickBtn"
        onClick={() => console.log("Clicked!")}
        variant="primary"
        curColor="blue"
        colorArr={["ABC", "ABC"]}
      />
    </div>
  );
}

export default App;
