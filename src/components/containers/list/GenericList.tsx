import React, { ReactNode, useEffect, useRef } from "react";
import { Text } from "../../basic-styled-system/Text";
import { Box } from "../../basic-styled-system/Box";
import { ListContentLoader } from "../../contentloaders/ListContentLoader";

export type ListItemFormatter = (item: any, selected: boolean) => ReactNode;

interface ListItemContainerProps {
  item: any;
  selected?: boolean;
  valueFormatFn?: (item: any) => any;
  itemFormatFn?: ListItemFormatter;
  onClick?: (item: any) => void;
}
const ListItemContainer = ({
  item,
  selected,
  onClick,
  valueFormatFn,
  itemFormatFn = (item: any, selected: boolean) => (
    <Text
      color={selected ? "blue" : "black"} //TODO: theme colours
      cursor={onClick ? "pointer" : "default"}
      mb="spacer10"
    >
      {valueFormatFn ? valueFormatFn(item) : item}
    </Text>
  ),
}: ListItemContainerProps) => {
  const listContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selected) {
      listContainerRef.current?.scrollIntoView();
    }
  }, [selected]);

  return (
    <div
      ref={listContainerRef}
      onClick={() => {
        if (onClick) {
          onClick(item);
        }
      }}
    >
      {itemFormatFn(item, !!selected)}
    </div>
  );
};

export interface GenericListProps {
  items: any[];
  loading?: boolean;
  idFn?: (it: any) => any;
  selectedItem?: any;
  onItemSelected?: (it: any) => void;
  resourceName?: string;
  valueFormatFn?: (item: any) => any;
  itemFormatFn?: ListItemFormatter;
}

export const GenericList = ({
  items,
  loading,
  idFn = (it) => `${it}`,
  selectedItem,
  onItemSelected,
  valueFormatFn,
  itemFormatFn,
  ...boxProps
}: GenericListProps) => {
  const itemSelected = (item: any): boolean => {
    if (idFn && selectedItem) {
      return idFn(item) === idFn(selectedItem);
    }
    return false;
  };

  const list = loading ? (
    <ListContentLoader />
  ) : items ? (
    items.map((item, _) => (
      <ListItemContainer
        item={item}
        selected={itemSelected(item)}
        key={idFn(item)}
        onClick={onItemSelected}
        valueFormatFn={valueFormatFn}
        itemFormatFn={itemFormatFn}
      />
    ))
  ) : (
    <></>
  );

  return <Box {...boxProps}>{list}</Box>;
};
