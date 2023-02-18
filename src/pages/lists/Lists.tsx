import "./Lists.scss";

import { SimpleListItem } from "./SimpleListItem";
import { DetailedListItem } from "./DetailedListItem";
import { RegularList } from "../../components/containers/List/RegularList";
import { GenericList } from "../../components/containers/List/GenericList";
import { useState } from "react";
import { OverflowContainer } from "../../components/layout/OverflowContainer";

const listData = Array.from({ length: 50 }).map((_, i) => ({
  name: "Name" + i,
  number: i,
  enabled: i % 3 === 0,
}));

export const ListsPage = () => {
  const [selected, setSelected] = useState("Item 3");
  const [selected2, setSelected2] = useState({ number: 3 });

  return (
    <div className="page">
      <h3>List 1</h3>
      <div className="content-wrapper">
        <OverflowContainer>
          <GenericList
            items={listData}
            valueFormatFn={(item) => item.name}
            idFn={(it) => it.number}
            selectedItem={selected}
            onItemSelected={setSelected}
          />
        </OverflowContainer>
      </div>
      <h3>List 2</h3>
      <OverflowContainer>
        <GenericList
          items={listData}
          idFn={(it) => it.number}
          selectedItem={selected2}
          onItemSelected={setSelected2}
          itemFormatFn={(item, selected) => (
            <DetailedListItem listItem={item} selected={selected} />
          )}
        />
      </OverflowContainer>
    </div>
  );
};
