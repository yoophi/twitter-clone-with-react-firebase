import React from "react";

const Tweet = ({ tweet }) => {
  return (
    <div>
      <h4>{tweet.text}</h4>
    </div>
  );
};

export default Tweet;
