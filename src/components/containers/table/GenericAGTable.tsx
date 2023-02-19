import React, { ReactNode, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { FieldFormatFn, splitFieldName } from "../../../utils/format";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { ColGroupDef } from "ag-grid-community/dist/lib/entities/colDef";
import { CellClickedEvent } from "ag-grid-community/dist/lib/events";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Box, BoxProps } from "../../basic-styled-system/Box";
import { Text } from "../../basic-styled-system/Text";
import { TableContentLoader } from "../../contentloaders/TableContentLoader"; // Optional theme CSS

export function createCellRenderer(
  fieldFormatFn: FieldFormatFn = (field, obj) => <Text>{obj[field]}</Text>
): (props: ICellRendererParams) => JSX.Element {
  return ({ data, colDef }: ICellRendererParams) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="41px"
        // userSelect="text"
      >
        {fieldFormatFn(colDef?.field || "", data)}
      </Box>
    );
  };
}

function mapColumnDef(columnDef?: ColDef) {
  return {
    ...columnDef,
    headerValueGetter: () => {
      if (columnDef?.headerName) {
        return columnDef?.headerName;
      }
      return splitFieldName(columnDef?.field || "");
    },
  };
}

export interface GenericAGTableProps extends BoxProps {
  displayedColumns?: string[];
  excludedColumns?: string[];
  columnDefinitions?: ColDef[];
  columnGroupDefinitions?: ColGroupDef[];
  tableData: any[];
  loading?: boolean;
  className?: string;
  onClick?: (row: any, colID: string) => void;
  emptyMessage?: ReactNode;
  rowSelection?: string;
  defaultCellWidth?: number;
  darkTheme?: boolean;
}

export const GenericAGTable = ({
  tableData = [],
  displayedColumns = tableData && tableData.length > 0
    ? Object.keys(tableData[0])
    : [],
  excludedColumns,
  columnDefinitions = [],
  columnGroupDefinitions = [],
  defaultCellWidth,
  loading,
  className,
  onClick,
  emptyMessage = <Text>No results</Text>,
  rowSelection = "single",
  darkTheme,
  ...boxProps
}: GenericAGTableProps) => {
  const columnIDs = useMemo(
    () => displayedColumns.filter((c) => !excludedColumns?.includes(c)),
    [displayedColumns, excludedColumns]
  );

  const columnDefs = useMemo<(ColDef | ColGroupDef)[]>(() => {
    if (columnDefinitions?.length > 0) {
      return columnIDs.map((id) => {
        const columnDef = columnDefinitions.find((c) => c.field === id);
        return mapColumnDef(columnDef || { field: id });
      });
    } else if (columnGroupDefinitions?.length > 0) {
      return columnGroupDefinitions.map((groupDef) => {
        return {
          ...groupDef,
          children: groupDef.children.map(mapColumnDef),
        };
      });
    }

    return [];
  }, [columnIDs, columnDefinitions, columnGroupDefinitions]);

  if (loading) {
    return <TableContentLoader />;
  }

  if (!tableData || tableData.length === 0) {
    return (
      <Box display="flex" justifyContent="center" margin="50px">
        {emptyMessage}
      </Box>
    );
  }

  return (
    <Box
      className={darkTheme ? "ag-theme-alpine-dark" : "ag-theme-alpine"}
      {...boxProps}
    >
      <AgGridReact
        rowData={tableData}
        columnDefs={columnDefs}
        defaultColDef={{
          width: defaultCellWidth,
          wrapHeaderText: true,
        }}
        tooltipShowDelay={700}
        onCellClicked={(event: CellClickedEvent) => {
          if (onClick) {
            onClick(event.data, event.colDef.field || "");
          }
        }}
        enableCellTextSelection={true}
      />
    </Box>
  );
};
