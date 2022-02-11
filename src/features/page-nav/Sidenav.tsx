import { RegularList } from "../../components/containers/List/RegularList";
import { SideNavListItem } from "./SideNavListItem";
import { SideNavItem } from "./side-nav-item";
import { ComponentTypes } from "../../components/pages/ComponentTypes";
import { DataFetchingComponentsPage } from "../../components/pages/data-fetching/DataFetchingComponentsPage";
import { ListsPage } from "../../components/pages/lists/Lists";
import { ModalPage } from "../../components/pages/ModalPage";
import { gotoPage } from "./pageNavSlice";
import { useAppDispatch } from "../../app/hooks";

const sideNavItems: SideNavItem[] = [
  { label: "Component types", component: ComponentTypes },
  { label: "Data fetching", component: DataFetchingComponentsPage },
  { label: "Lists", component: ListsPage },
  { label: "Modals", component: ModalPage },
];

export const Sidenav = () => {
  const dispatch = useAppDispatch();

  return (
    <RegularList
      items={sideNavItems}
      idFn={(it) => it.label}
      itemSelected={(it) => dispatch(gotoPage(it))}
      resourceName="sideNavItem"
      itemComponent={SideNavListItem}
    />
  );
};
