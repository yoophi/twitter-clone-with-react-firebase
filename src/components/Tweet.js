import { dbService } from "fbase";
import React from "react";

const Tweet = ({ tweet, isOwner }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");
    if (ok) {
      await dbService.doc(`tweets/${tweet.id}`).delete();
    }
  };

  return (
    <div>
      <h4>{tweet.text}</h4>
      {isOwner && (
        <div>
          <button onClick={onDeleteClick}>Delete Tweet</button>
          <button>Edit Tweet</button>
        </div>
      )}
    </div>
  );
};

export default Tweet;
