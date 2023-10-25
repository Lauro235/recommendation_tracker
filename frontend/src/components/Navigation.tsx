import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { useContext } from "react";
import { UserContext } from "../main";

const Navigation = () => {
  const users = useContext(UserContext);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Recommendation Tracker</NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            {users?.map((profile) => {
              return (
                <NavigationMenuLink className="p-3">
                  <p>{profile.firstName}</p>
                  <img
                    className="rounded-full aspect-square object-cover w-4/5 mx-auto"
                    src={profile.image}
                  ></img>
                </NavigationMenuLink>
              );
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
