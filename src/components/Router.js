import Navigation from "components/Navigation";
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";

const AppRouter = ({ isLoggedIn, refreshUser, userObj }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <div className="flex-grow h-full drawer">
              <input
                id="mobile-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className=" flex flex-col items-center flex-grow h-full text-center drawer-content "></div>
              <div className="navbar flex-none w-full pt-3 bg-neutral text-neutral-content">
                <div className="flex-none">
                  <label
                    for="mobile-drawer"
                    className="btn btn-circle btn-ghost drawer-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="flex-1 px-2 mx-2">
                  <span className="text-lg font-bold"></span>
                </div>
                <div className="flex-none">
                  <button className="btn btn-circle btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="
            flex flex-col
            items-center
            flex-1
            w-full
            h-full
            pt-10
            overflow-y-auto
            bg-base-200
          "
              >
                <div className="avatar">
                  <div className="w-32 h-32 mask mask-squircle">
                    <img src="https://i.pravatar.cc/128?img=54" />
                  </div>
                </div>
                <div className="my-4 text-2xl font-bold">Jotaro Kujo</div>
                <p className="text-sm">
                  Quidem eos vel exercitationem repellendus natus.
                </p>
                <div className="mt-4 mb-10">
                  <button className="btn btn btn-primary btn-sm mt-4">
                    Follow
                  </button>
                  <button className="btn btn btn-primary btn-sm mt-4">
                    Message
                  </button>
                </div>
                <div className="w-full tabs">
                  <a className="flex-grow tab tab-lifted"></a>
                  <a className="tab tab-lifted tab-active">Photos</a>
                  <a className="tab tab-lifted">Followers</a>
                  <a className="tab tab-lifted">Following</a>
                  <a className="flex-grow tab tab-lifted"></a>
                </div>

                {/*
            <Navigation userObj={userObj} />
 */}
                <Route exact path="/">
                  <Home userObj={userObj} />
                </Route>
                <Route exact path="/profile">
                  <Profile refreshUser={refreshUser} userObj={userObj} />
                </Route>
              </div>
            </div>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
