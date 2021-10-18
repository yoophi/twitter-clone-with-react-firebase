import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Tweet from "components/Tweet";

const Profile = ({ userObj }) => {
  const [tweets, setTweets] = useState([]);

  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyTweets = async () => {
    const tweets = await dbService
      .collection("tweets")
      .where("creatorId", "==", userObj.uid)
      .orderBy("createdAt", "asc")
      .get();
    return tweets.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));
  };

  useEffect(() => {
    getMyTweets().then((tweets) => setTweets(tweets));
  }, []);

  return (
    <>
      <div>
        <button onClick={onLogOutClick}>Log Out</button>
      </div>
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Profile;
