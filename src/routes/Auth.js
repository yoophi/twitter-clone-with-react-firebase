import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React from "react";

const Auth = () => {
  const onSocialCLick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  return (
    <div>
      <AuthForm />

      <div>
        <button
          className="btn btn-primary"
          onClick={onSocialCLick}
          name="google"
        >
          Continue with Google
        </button>
        <button
          className="btn btn-primary"
          onClick={onSocialCLick}
          name="github"
        >
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Auth;
