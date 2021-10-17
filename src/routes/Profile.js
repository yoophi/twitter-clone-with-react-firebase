import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import React from "react";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <div>
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
};

export default Profile;
