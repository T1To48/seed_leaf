import type { SidebarLinkData } from "src/types";
import {
  ArrowRightStartOnRectangleIcon,
  MapPinIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const linksArr: SidebarLinkData[] = [
  {
    text: "Orders History",
    icon: <ShoppingBagIcon />,
    routeParam: "orders",
  },
  {
    text: "Manage Address",
    icon: <MapPinIcon />,
    routeParam: "address",
  },
  {
    text: "Profile",
    icon: <UserIcon />,
    routeParam: "profile",
  },
  {
    text: "Logout",
    icon: <ArrowRightStartOnRectangleIcon />,
  },
];
