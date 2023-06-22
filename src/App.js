// import logo from './logo.svg';
import './App.css';
import LoginButton from './login';
import Profile from './profile';
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {  isAuthenticated } = useAuth0();

  return (
    <div className="App">
   
    {!isAuthenticated ?   <p>hi please login</p> :  <p>welcome</p> }
    {!isAuthenticated ?  <LoginButton/> : <Profile/> }
    {/* <Profile/>
    <LoginButton/> */}
    </div>
  );
}

export default App;
