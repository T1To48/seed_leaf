
type RouteParams = "orders" | "address" | "profile";
type LinkText = "Orders History" | "Manage Address" | "Profile" | "Logout";
type SidebarLinkData = {
    text: LinkText
    icon: JSX.Element;
    routeParam?: RouteParams
}

interface LinkItemProps {
    linkData: SidebarLinkData;
    currentPage: RouteParams
}
interface AccountHeaderProps {
    title: LinkText;
}

export type { RouteParams, SidebarLinkData, LinkItemProps, AccountHeaderProps }