import styled from "styled-components";

interface FieldNameFns {
  [field: string]: (field: string) => string;
}

interface FieldFormatFns {
  [field: string]: (field: string, obj: any) => string;
}

export interface FieldsParams {
  obj: any;
  visibleFields: string[];
  fieldNameFns?: FieldNameFns;
  fieldFormatFns?: FieldFormatFns;
}

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 4px;
  grid-auto-rows: max-content;
  grid-row-gap: 20px;
`;

export const Fields = ({
  obj,
  visibleFields,
  fieldNameFns,
  fieldFormatFns,
}: FieldsParams) => {
  return (
    <FieldsGrid>
      {visibleFields.map((field) => (
        <>
          <span>
            {fieldNameFns && fieldNameFns[field]
              ? fieldNameFns[field](field)
              : field}
          </span>
          <span>
            {fieldFormatFns && fieldFormatFns[field]
              ? fieldFormatFns[field](field, obj)
              : obj[field]}
          </span>
        </>
      ))}
    </FieldsGrid>
  );
};
