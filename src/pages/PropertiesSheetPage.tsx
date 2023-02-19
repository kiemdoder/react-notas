import { GenericPropertiesSheet } from "../components/containers/properties/GenericPropertiesSheet";

export const PropertiesSheetPage = () => {
  const obj = {
    prop1: "prop1",
    secondProp: "second prop",
    prop3: "prop3",
    prop4: "prop4",
    prop5: "prop5",
    prop6: "prop6",
  };
  return <GenericPropertiesSheet obj={obj} />;
};
