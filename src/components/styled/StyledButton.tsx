import styled from "styled-components";
export interface StyledButtonProps {
  variant?: "solid" | "outline";
}
export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  height: 40px;
  border: solid 2px #29ab5c;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: ${({ variant }) => (variant === "outline" ? "white" : "#29ab5c")};
  color: ${({ variant }) => (variant === "outline" ? "#29ab5c" : "white")};
`;
