
type RouteParams = "orders" | "address" | "profile";

type SidebarLinkData = {
    text: "Orders History" | "Manage Address" | "Profile" | "Logout";
    icon: JSX.Element;
    routeParam?: RouteParams
}

interface LinkItemProps {
    linkData: SidebarLinkData;
    currentPage: RouteParams
}

export type { RouteParams, SidebarLinkData, LinkItemProps }