import { SideNavItem } from "./side-nav-item";

interface SideNavListItemProps {
  sideNavItem?: SideNavItem;
}

export const SideNavListItem = ({ sideNavItem }: SideNavListItemProps) => {
  return <>{sideNavItem ? sideNavItem.label : "Loading.."}</>;
};
