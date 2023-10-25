import { useContext } from "react";
import { UserContext } from "../main";

interface INavigation {
  updateUser: (id:number) => void;
}

const Navigation = ({updateUser}: INavigation) => {
  const users = useContext(UserContext);

  return (
    <div>
      <div className="border-solid border-slate-400 border-2 w-5/6 mx-auto flex items-center justify-between">
        <h2 className="text-left font-bold"><p>Recommendation</p> <p>Tracker</p></h2>
        <details className="dropdown">
          <summary className="m-1 btn">Pick User Profile</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
            {users?.map((profile) => {
              return (
                <li onClick={() => updateUser(profile.id)} className="hover:bg-blue-300" key={profile.id}>
                  <p>{profile.firstName}</p>
                  <img
                    className="aspect-square rounded-full object-cover w-16 mx-auto"
                    src={profile.image}
                  />
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navigation;
