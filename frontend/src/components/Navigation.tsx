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

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Recommendation Tracker</NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="p-3">
              <p>Daniel</p>
              <img
                className="rounded-full aspect-square object-cover w-4/5 mx-auto"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </NavigationMenuLink>
            <NavigationMenuLink className="p-3">
              <p>Alison</p>
              <img
                className="rounded-full aspect-square object-cover w-4/5 mx-auto"
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></img>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
