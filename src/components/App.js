import { useState } from "react";
import { authService } from "../fbase";
import AppRouter from "./AppRouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>
        &copy; {new Date().getFullYear()} TwitterClone with React Firebase
      </footer>
    </>
  );
}

export default App;
