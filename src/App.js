import './App.css';
import { Fetch } from "./components/api/fetchShoes"

function App() {
  return (
    <div className="App-header">
       <p>Your Sneacker's Room 👟</p>
       <Fetch/>
    </div>
  );
}

export default App;
