import { ListItem } from "./list-item";

interface DetailedListItemProps {
  listItem: ListItem;
}

export const DetailedListItem = ({
  listItem: { name, number, enabled },
}: DetailedListItemProps) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Number: {number}</div>
      <div>Enabled: {enabled ? "Yes" : "No"}</div>
    </>
  );
};
