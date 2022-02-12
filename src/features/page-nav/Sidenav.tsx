import { RegularList } from "../../components/containers/List/RegularList";
import { SideNavListItem } from "./SideNavListItem";
import { gotoPage } from "./pageNavSlice";
import { useAppDispatch } from "../../app/hooks";
import { sideNavItems } from "./side-nav-items";

export const Sidenav = () => {
  const dispatch = useAppDispatch();

  return (
    <RegularList
      items={sideNavItems}
      idFn={(it) => it.label}
      itemSelected={(it) => dispatch(gotoPage(it.label))}
      resourceName="sideNavItem"
      itemComponent={SideNavListItem}
    />
  );
};
