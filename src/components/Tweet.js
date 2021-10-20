import { dbService, storageService } from "fbase";
import React, { useState } from "react";

const Tweet = ({ tweet, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweet.text);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`tweets/${tweet.id}`).update({ text: newTweet });
    setEditing(false);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");
    if (ok) {
      await dbService.doc(`tweets/${tweet.id}`).delete();
      if (tweet.attachmentUrl !== "") {
        await storageService.refFromURL(tweet.attachmentUrl).delete();
      }
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  return (
    <div className="border border-gray-300 round-4 mb-2 p-4">
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={newTweet} required />
            <input type="submit" value="Update Tweet" />
          </form>
          <div>
            <button onClick={toggleEditing}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div>
            <small style={{ color: "#ccc" }}>{"@" + tweet.creatorId}</small>
          </div>
          <h4 className="text-2xl">{tweet.text}</h4>
          {tweet.attachmentUrl && (
            <div>
              <img
                src={tweet.attachmentUrl}
                style={{ width: "200px" }}
                alt="tweet attachment"
              />
            </div>
          )}
          {isOwner && (
            <div>
              <button onClick={onDeleteClick}>Delete Tweet</button>
              <button onClick={toggleEditing}>Edit Tweet</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Tweet;
