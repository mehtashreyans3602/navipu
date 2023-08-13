// import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import AdminMap from './components/AdminMap';
import { LocationProvider } from "./context/Locationcontext";
import Guestmap from "./components/Guestmap";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App w-full h-screen">


      {!isAuthenticated ? <LoginButton logintext='Admin Entry' /> : ''}
      <LocationProvider>
        {isAuthenticated ? <AdminMap /> : <Guestmap />}
      </LocationProvider>
    </div>
  );
}

export default App;
