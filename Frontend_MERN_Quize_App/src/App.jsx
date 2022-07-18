import logo from './logo.svg';
import './App.css';
import { QuizePage } from './Components/QuizePage.jsx';
import { Home } from './Components/Home.jsx';
import { Navbar } from './Components/Navbar.jsx';
import { TopicQuiz } from './Components/TopicQuiz.jsx';
import { Footer } from './Components/Footer.jsx';
import { NewQuizPage } from './Components/NewQuizPage.jsx';
import { Login } from './Components/auth/Login.jsx';
import { Register } from './Components/auth/Register.jsx';
import { Route, Routes } from 'react-router-dom';
import { Admin } from './Components/Admin/Admin.jsx';


function App() {
  return (
    <div className="App ">
     {/* <h1 className="bg-red-700">Quize App</h1> */}
     <Navbar/>
      <Routes>
     <Route path="/" element={ <TopicQuiz/>} />
        <Route path="/login" element={ <Login/>}  />
        <Route path="/register" element={ <Register  /> } />
     </Routes>
     {/* <QuizePage/> */}
     {/* <Home/> */}
     
     {/* <NewQuizPage/>
      */}
      {/* <Admin/> */}
      {/* <Login/>
      <Register  /> */}
     <Footer/> 
    
    </div>
  );
}

export default App;
