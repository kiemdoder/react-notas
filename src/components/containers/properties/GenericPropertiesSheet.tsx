import styled, { css } from "styled-components";
import { FieldFormatFn, splitFieldName } from "../../../utils/format";
import { Box, BoxProps } from "../../basic-styled-system/Box";
import { Text } from "../../basic-styled-system/Text";

const FieldsGridContainer = styled(Box)<{ center: boolean }>`
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "start")};
`;

const FieldsGrid = styled(Box)<{ numColumns: number }>`
  display: grid;
  grid-template-columns: ${({ numColumns }) =>
    `repeat(${numColumns}, max-content max-content)`};
  grid-column-gap: 14px;
  grid-auto-rows: max-content;
  grid-row-gap: 20px;

  ${({ numColumns }) => {
    if (numColumns === 2)
      return css`
        .prop-label:nth-child(4n-1) {
          margin-left: 50px;
        }
      `;
  }}
`;

interface FieldNameFns {
  [field: string]: (field: string) => any;
}

interface FieldFormatFns {
  [field: string]: FieldFormatFn;
}

export interface GenericFieldsParams extends BoxProps {
  obj: any;
  visibleFields?: string[];
  excludedFields?: string[];
  fieldNameFns?: FieldNameFns;
  fieldFormatFns?: FieldFormatFns;
  numColumns?: number;
  center?: boolean;
}

export const GenericPropertiesSheet = ({
  obj,
  visibleFields = Object.keys(obj),
  excludedFields = [],
  fieldNameFns,
  fieldFormatFns,
  numColumns = 2,
  center = false,
  ...props
}: GenericFieldsParams) => {
  const fields = visibleFields.filter((f) => !excludedFields.includes(f));
  return (
    <FieldsGridContainer center={center} {...props}>
      <FieldsGrid numColumns={numColumns}>
        {fields.map((field) => (
          <>
            <Text
              className="prop-label"
              fontWeight="900"
              display="inline"
              mr="spacer10"
            >
              {fieldNameFns && fieldNameFns[field]
                ? fieldNameFns[field](field)
                : splitFieldName(field)}
            </Text>
            <Text display="inline">
              {fieldFormatFns && fieldFormatFns[field]
                ? fieldFormatFns[field](field, obj)
                : `${obj[field]}`}
            </Text>
          </>
        ))}
      </FieldsGrid>
    </FieldsGridContainer>
  );
};
