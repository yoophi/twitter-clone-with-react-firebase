import React from "react";

const Tweet = ({ tweet, isOwner }) => {
  return (
    <div>
      <h4>{tweet.text}</h4>
      {isOwner && (
        <div>
          <button>Delete Tweet</button>
          <button>Edit Tweet</button>
        </div>
      )}
    </div>
  );
};

export default Tweet;
