import "./Lists.scss";

import { SimpleListItem } from "./SimpleListItem";
import { DetailedListItem } from "./DetailedListItem";
import { RegularList } from "../../components/containers/List/RegularList";

const listData = Array.from({ length: 50 }).map((_, i) => ({
  name: "Name" + i,
  number: i,
  enabled: i % 3 === 0,
}));

export const ListsPage = () => {
  return (
    <div className="page">
      <h3>List 1</h3>
      <div className="content-wrapper">
        <div className="overflow-container">
          <RegularList
            items={listData}
            idFn={(it) => it.number}
            itemSelected={(it) => console.log("item selected", it)}
            resourceName={"listItem"}
            itemComponent={SimpleListItem}
          />
        </div>
      </div>
      <h3>List 2</h3>
      <div className="list-container">
        <RegularList
          items={listData}
          resourceName={"listItem"}
          itemComponent={DetailedListItem}
        />
      </div>
    </div>
  );
};
