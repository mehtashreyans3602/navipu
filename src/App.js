// import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import AdminMap from './components/AdminMap';
import Guestmap from "./components/Guestmap";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated } = useAuth0();
  const google = window.google;
  return (
    <div className="App">


      {!isAuthenticated ? <LoginButton logintext='login for admin only' /> : ''}
      {isAuthenticated ? <AdminMap google={google} /> : <Guestmap />}

    </div>
  );
}

export default App;
