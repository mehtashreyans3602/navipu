import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return <button className="rounded-full text-xl px-2 py-1 border-2 border-l-gray-300 border-t-gray-300 border-b-black border-r-black" onClick={() => loginWithRedirect()}>{props.logintext}</button>;
};

export default LoginButton;