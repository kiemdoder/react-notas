import { StyledButton } from "./StyledButton";
import styled from "styled-components";

export const StyledSubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
