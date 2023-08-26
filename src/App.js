// import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import AdminMap from './components/AdminMap';
import { LocationProvider } from "./context/Locationcontext";
import Guestmap from "./components/Guestmap";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();

  function authi() {
    // these are the allowed accounts for admin add your sub
    var subacc = [
      'google-oauth2|110182463133452157373',
    ]
    console.log(user);
    return isAuthenticated && subacc.includes(user.sub);
  }


  return (
    <div className="App w-full h-screen">


      {!isAuthenticated ? <LoginButton logintext='Admin Entry' /> : ''}
      <LocationProvider>
        {/* {authi() ? <h1>{user.name}</h1> : <h2>invalid user</h2>}
        {authi() ? console.table(user) : console.log('invalid user')} */}

        {authi() ? <AdminMap /> : <Guestmap />}
      </LocationProvider>
    </div>
  );
}

export default App;
