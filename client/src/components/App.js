import Navbar from "./Navbar";
import About from "./About";
import PersonPage from "./PersonPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/"
            element= {  <PersonPage />}>
           
          </Route>
          <Route path = "/home"
            element= {  <PersonPage />}>
           
          </Route>
          <Route path = "/login"
            element= { <LoginForm/>}>
           
          </Route>
          <Route path = "/signup"
            element= { <SignUpForm/>}>
           
          </Route>
          <Route path = "/about"
            element= {  <About/>}>
           
          </Route>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;