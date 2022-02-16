import { MultiStepFormPage } from "../../pages/MultiStepFormPage";
import { ListsPage } from "../../pages/lists/Lists";
import { ComponentTypes } from "../../pages/ComponentTypes";
import { ModalPage } from "../../pages/ModalPage";
import { SideNavItem } from "./side-nav-item";
import { DataFetchingComponentsPage } from "../../pages/data-fetching/DataFetchingComponentsPage";
import { ControlledForm } from "../../components/controlled/ControlledForm";
import { HigherOrderComponents } from "../../pages/HigherOrderComponents";

export const sideNavItems: SideNavItem[] = [
  { label: "Component types", component: ComponentTypes },
  { label: "Data fetching", component: DataFetchingComponentsPage },
  { label: "Lists", component: ListsPage },
  { label: "Modals", component: ModalPage },
  { label: "Controlled form", component: ControlledForm },
  { label: "Multi step form", component: MultiStepFormPage },
  { label: "Higher order components", component: HigherOrderComponents },
];
