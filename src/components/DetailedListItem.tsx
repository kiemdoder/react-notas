interface PropsType {
  name: string;
  number: number;
  enabled: boolean;
}

export const DetailedListItem = ({ name, number, enabled }: PropsType) => {
  return (
    <>
      <div>Name: {name}</div>
      <div>Number: {number}</div>
      <div>Enabled: {enabled ? "Yes" : "No"}</div>
    </>
  );
};
