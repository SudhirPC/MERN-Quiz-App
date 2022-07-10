import logo from './logo.svg';
import './App.css';
import { QuizePage } from './Components/QuizePage.jsx';
import { Home } from './Components/Home.jsx';
import { Navbar } from './Components/Navbar.jsx';
import { TopicQuiz } from './Components/TopicQuiz.jsx';

function App() {
  return (
    <div className="App">
     {/* <h1 className="bg-red-700">Quize App</h1> */}
     <Navbar/>
     {/* <QuizePage/> */}
     {/* <Home/> */}
     <TopicQuiz/>
    </div>
  );
}

export default App;
