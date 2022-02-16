import { SimpleListItem } from "./SimpleListItem";
import { DetailedListItem } from "./DetailedListItem";
import { RegularList } from "../../components/containers/List/RegularList";

const listData = Array.from({ length: 10 }).map((_, i) => ({
  name: "Name" + i,
  number: i,
  enabled: i % 3 === 0,
}));

export const ListsPage = () => {
  return (
    <>
      <RegularList
        items={listData}
        idFn={(it) => it.number}
        itemSelected={(it) => console.log("item selected", it)}
        resourceName={"listItem"}
        itemComponent={SimpleListItem}
      />
      <RegularList
        items={listData}
        resourceName={"listItem"}
        itemComponent={DetailedListItem}
      />
    </>
  );
};
