import styles from "./RegularList.module.scss";
import { useState } from "react";

interface RegularListProps {
  items: any[];
  idFn?: (it: any) => any;
  itemSelected?: (it: any) => void;
  resourceName: string;
  itemComponent: (props: any) => JSX.Element;
}
export const RegularList = ({
  items,
  idFn,
  itemSelected,
  resourceName,
  itemComponent: ItemComponent,
}: RegularListProps) => {
  const [selectedItem, setSelectedItem] = useState();

  const selectedClass = (item: any) => {
    if (idFn && selectedItem) {
      return idFn(item) === idFn(selectedItem) ? styles.selected : "";
    }
    return "";
  };

  return (
    <>
      {items.map((item, i) => (
        <div
          className={`${styles.listItemContainer} ${selectedClass(item)}`}
          onClick={() => {
            setSelectedItem(item);
            if (itemSelected) {
              itemSelected(item);
            }
          }}
        >
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </div>
      ))}
    </>
  );
};
