import Navbar from "./Navbar";
import PersonPage from "./PersonPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className="app">
      <Navbar />
      <PersonPage />
      <LoginForm/>
      <SignUpForm/>
    </div>
  );
}

export default App;