import "./App.css";
import Form from "./component/Form";
import Settings from "./component/Settings";

function App() {
  return (
    <>
      <div className="main-container text-2xl w-150 h-130 bg-white rounded-3xl max-sm:w-100 max-sm:text-sm">
        <Settings />
        <Form />
      </div>
    </>
  );
}

export default App;
