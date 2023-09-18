// import logo from './logo.svg';
import "./App.css";
import LoginButton from "./components/login";
import AdminMap from "./components/AdminMap";
// import Guestmap from "./components/Guestmap";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();

  function Auth() {
    // these are the allowed accounts for admin add your sub
    const SubAcc = ["google-oauth2|106746765731439499987"];
    return isAuthenticated && SubAcc.includes(user.sub);
  }

  return (
    <div className="App w-full h-screen flex justify-center items-center p-0 m-0">
       <AdminMap />
      {/* {Auth() ? <AdminMap /> : <LoginButton logintext="Admin Entry" />} */}
    </div>
  );
}

export default App;
