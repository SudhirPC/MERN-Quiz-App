import logo from './logo.svg';
import './App.css';
import { QuizePage } from './Components/QuizePage.jsx';
import { Home } from './Components/Home.jsx';

function App() {
  return (
    <div className="App">
     <h1>Quize App</h1>
     <QuizePage/>
     {/* <Home/> */}
    </div>
  );
}

export default App;
