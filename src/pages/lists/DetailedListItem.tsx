import { ListItem } from "./list-item";
import { Box } from "../../components/basic-styled-system/Box";

interface DetailedListItemProps {
  listItem: ListItem;
  selected?: boolean;
}

export const DetailedListItem = ({
  listItem: { name, number, enabled },
  selected,
}: DetailedListItemProps) => {
  return (
    <Box color={selected ? "blue" : "black"} mb="10px">
      <div>Name: {name}</div>
      <div>Number: {number}</div>
      <div>Enabled: {enabled ? "Yes" : "No"}</div>
    </Box>
  );
};
