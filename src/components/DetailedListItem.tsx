interface DetailedListItemProps {
  name: string;
  number: number;
  enabled: boolean;
}

export const DetailedListItem = ({
  name,
  number,
  enabled,
}: DetailedListItemProps) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Number: {number}</div>
      <div>Enabled: {enabled ? "Yes" : "No"}</div>
    </>
  );
};
