import logo from './logo.svg';
import './App.css';
import { QuizePage } from './Components/QuizePage.jsx';
import { Home } from './Components/Home.jsx';
import { Navbar } from './Components/Navbar.jsx';
import { TopicQuiz } from './Components/TopicQuiz.jsx';
import { Footer } from './Components/Footer.jsx';
import { NewQuizPage } from './Components/NewQuizPage.jsx';
import { Login } from './Components/auth/Login.jsx';


function App() {
  return (
    <div className="App ">
     {/* <h1 className="bg-red-700">Quize App</h1> */}
     <Navbar/>
     {/* <QuizePage/> */}
     {/* <Home/> */}
     {/* <TopicQuiz/> */}
     {/* <NewQuizPage/> */}
    <Login/>
     <Footer/>
    </div>
  );
}

export default App;
