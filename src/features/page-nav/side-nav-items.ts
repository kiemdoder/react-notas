import { SideNavItem } from "./side-nav-item";
import { ComponentTypes } from "../../components/pages/ComponentTypes";
import { DataFetchingComponentsPage } from "../../components/pages/data-fetching/DataFetchingComponentsPage";
import { ListsPage } from "../../components/pages/lists/Lists";
import { ModalPage } from "../../components/pages/ModalPage";
import { ControlledForm } from "../../components/controlled/ControlledForm";
import { MultiStepFormPage } from "../../components/pages/MultiStepFormPage";

export const sideNavItems: SideNavItem[] = [
  { label: "Component types", component: ComponentTypes },
  { label: "Data fetching", component: DataFetchingComponentsPage },
  { label: "Lists", component: ListsPage },
  { label: "Modals", component: ModalPage },
  { label: "Controlled form", component: ControlledForm },
  { label: "Multi step form", component: MultiStepFormPage },
];
