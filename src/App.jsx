import "./App.css";
import Form from "./component/Form";
import Settings from "./component/Settings";

function App() {
  return (
    <>
      <div className="text-2xl w-150 h-150 bg-white rounded-3xl">
        <Settings />
        <Form />
      </div>
    </>
  );
}

export default App;
