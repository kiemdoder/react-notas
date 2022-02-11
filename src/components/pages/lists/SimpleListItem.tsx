import { ListItem } from "./list-item";

interface SimpleListItemProps {
  listItem: ListItem;
}

export const SimpleListItem = ({ listItem: { name } }: SimpleListItemProps) => {
  return <span>{name}</span>;
};
