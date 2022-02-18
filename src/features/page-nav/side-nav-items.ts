import { MultiStepFormPage } from "../../pages/MultiStepFormPage";
import { ListsPage } from "../../pages/lists/Lists";
import { ComponentTypesPage } from "../../pages/ComponentTypesPage";
import { ModalPage } from "../../pages/ModalPage";
import { SideNavItem } from "./side-nav-item";
import { DataFetchingComponentsPage } from "../../pages/data-fetching/DataFetchingComponentsPage";
import { ControlledForm } from "../../components/controlled/ControlledForm";
import { HigherOrderComponentsPage } from "../../pages/HigherOrderComponentsPage";
import { CustomHooksPage } from "../../pages/CustomHooksPage";

export const sideNavItems: SideNavItem[] = [
  { label: "Component types", component: ComponentTypesPage },
  { label: "Data fetching", component: DataFetchingComponentsPage },
  { label: "Lists", component: ListsPage },
  { label: "Modals", component: ModalPage },
  { label: "Controlled form", component: ControlledForm },
  { label: "Multi step form", component: MultiStepFormPage },
  { label: "Higher order components", component: HigherOrderComponentsPage },
  { label: "Custom hooks", component: CustomHooksPage },
];
