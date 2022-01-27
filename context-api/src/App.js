// import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import TheameProvider from "./contextFolder/TheameUpdate";
import "./App.css";

function App() {
  return (
    <>
      <TheameProvider>
        <FunctionalComponent />
        {/* <ClassComponent /> */}
      </TheameProvider>
    </>
  );
}

export default App;
