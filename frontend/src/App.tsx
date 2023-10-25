import "./App.css";
import Navigation from "./components/Navigation";

import { useContext, useState } from "react";
import { UserContext } from "./main";
import { IUser } from "./data/users";
import Recommendation from "./components/Recommendation/Recommendation";

function App() {
  const users = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(users !== null && users[0]);

  const updateUser = (profile: IUser) => {
    setCurrentUser(profile);
  };

  console.log(currentUser);

  return (
    <>
      <div className="h-full w-full border-solid border-2">
        <Navigation updateUser={updateUser} />
        <Recommendation />
      </div>
    </>
  );
}

export default App;
