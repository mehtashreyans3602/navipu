import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="rounded-lg text-xl px-3 py-1 border border-black text-black  bg-[#ddeb78]"
      onClick={() =>
        loginWithRedirect({
          authorizationParams: {
            redirect_uri: window.location.origin + "/navipiu",
          },
        })
      }
    >
      {props.logintext}
    </button>
  );
};

export default LoginButton;
