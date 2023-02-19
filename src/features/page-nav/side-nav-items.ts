import { MultiStepFormPage } from "../../pages/MultiStepFormPage";
import { ListsPage } from "../../pages/lists/Lists";
import { ComponentTypesPage } from "../../pages/ComponentTypesPage";
import { ModalPage } from "../../pages/ModalPage";
import { SideNavItem } from "./side-nav-item";
import { DataFetchingComponentsPage } from "../../pages/data-fetching/DataFetchingComponentsPage";
import { ControlledForm } from "../../components/controlled/ControlledForm";
import { HigherOrderComponentsPage } from "../../pages/HigherOrderComponentsPage";
import { CustomHooksPage } from "../../pages/CustomHooksPage";
import { ContextPage1 } from "../../pages/context/ContextPage1";
import { ContextPage2 } from "../../pages/context/ContextPage2";
import { StyledComponentsPage } from "../../pages/StyledComponentsPage";
import { GraphQLPage } from "../../pages/GraphQLPage";
import { TextPage } from "../../pages/TextPage";
import { PropertiesSheetPage } from "../../pages/PropertiesSheetPage";
import { TablePage } from "../../pages/TablePage";

export const sideNavItems: SideNavItem[] = [
  { label: "Component types", component: ComponentTypesPage },
  { label: "Data fetching", component: DataFetchingComponentsPage },
  { label: "Lists", component: ListsPage },
  { label: "Modals", component: ModalPage },
  { label: "Controlled form", component: ControlledForm },
  { label: "Multi step form", component: MultiStepFormPage },
  { label: "Higher order components", component: HigherOrderComponentsPage },
  { label: "Custom hooks", component: CustomHooksPage },
  { label: "Context1", component: ContextPage1 },
  { label: "Context2", component: ContextPage2 },
  { label: "Styled components", component: StyledComponentsPage },
  { label: "GraphQL", component: GraphQLPage },
  { label: "Text", component: TextPage },
  { label: "Properties sheet", component: PropertiesSheetPage },
  { label: "Table", component: TablePage },
];
