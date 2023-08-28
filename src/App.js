// import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import AdminMap from './components/AdminMap';
import { LocationProvider } from "./context/Locationcontext";
import Guestmap from "./components/Guestmap";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();

  function Auth() {
    // these are the allowed accounts for admin add your sub
    const SubAcc = [
      'google-oauth2|106746765731439499987',
    ]
    return isAuthenticated && SubAcc.includes(user.sub);
  }

  return (
    <div className="App w-full h-screen">


      {!isAuthenticated ? <LoginButton logintext='Admin Entry' /> : ''}
      <LocationProvider>
        {/*{Auth() ? <h1>{user.name}</h1> : <h2>invalid user</h2>}*/}
        {Auth() ? console.table(user) : console.log('invalid user')}

        {/* <AdminMap /> */}
        {Auth() ? <AdminMap /> : <Guestmap />}
      </LocationProvider>
    </div>
  );
}

export default App;
