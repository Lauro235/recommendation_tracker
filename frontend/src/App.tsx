import "./App.css";
import Navigation from "./components/Navigation";

import { useContext, useState } from "react";
import { UserContext } from "./main";

function App() {
  const users = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(
    users !== null ? users[0].id : 1
  );

  const updateUser = (id: number) => {
    setCurrentUser(id);
  };

  console.log(currentUser);

  return (
    <>
      <div className="h-full w-full border-solid border-2">
        <Navigation updateUser={updateUser} />
      </div>
    </>
  );
}

export default App;
