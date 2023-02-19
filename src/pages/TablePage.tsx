import {
  createCellRenderer,
  GenericAGTable,
} from "../components/containers/table/GenericAGTable";

export const TablePage = () => {
  const tableData = Array(5)
    .fill(1)
    .map((_, r) =>
      [1, 2, 3, 4].reduce((acc, i) => {
        // @ts-ignore
        acc[`col${i}`] = `val${r}-${i}`;
        return acc;
      }, {})
    );

  const columnDefinitions = [
    {
      field: "col3",
      headerName: "Test column 3",
      cellRenderer: createCellRenderer((field, obj) => `__${obj[field]}__`),
    },
    {
      field: "calculated",
      headerName: "Calculated column",
      cellRenderer: createCellRenderer(
        (field, obj) => `${obj["col1"]} + ${obj["col2"]}`
      ),
    },
  ];

  const displayedColumns = ["col1", "col2", "col3", "col4", "calculated"];
  return (
    <GenericAGTable
      tableData={tableData}
      columnDefinitions={columnDefinitions}
      displayedColumns={displayedColumns}
      height="500px"
    />
  );
};
