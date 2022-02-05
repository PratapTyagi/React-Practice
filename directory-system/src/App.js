import "./App.css";
import FolderSystem from "./components/FolderSystem";
import file_explorer from "./file_explorer.json";

function App() {
  return (
    <div className="App">
      <FolderSystem file_explorer={file_explorer} count={0} />
    </div>
  );
}

export default App;
