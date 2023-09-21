import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="w-auto">
      <p className="capitalize">
        {props.innertext},{" "}
        <span className="font-bold uppercase">
          {isAuthenticated ? user.nickname : "guest"}
        </span>
      </p>
    </div>
  );
};

// export const Username = (props) => {
//   const { user } = useAuth0();
//  return <p>{props.innertext}, {user.name}</p>;
// }
export default Profile;
