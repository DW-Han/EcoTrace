import "./App.css";
import Dashboard from "./components/Dashboard"; // Import the Dashboard component

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="./assets/react.svg"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Energy & Carbon Footprint Dashboard</h1>
      <div className="card">
        {/* Integrate the Dashboard component */}
        <Dashboard />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
