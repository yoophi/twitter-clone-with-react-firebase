import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">
            Profile of {userObj.displayName ? userObj.displayName : "unknown"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
