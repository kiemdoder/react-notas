import { Header } from "../components/styled/Header";
import { StyledButton } from "../components/styled/StyledButton";
import { StyledSubmitButton } from "../components/styled/StyledSubmitButton";

export const StyledComponentsPage = () => {
  return (
    <>
      {/*<Header bg="lightsalmon">*/}
      <Header>
        <h1>Header title</h1>
      </Header>

      <p>
        <StyledButton>One</StyledButton>
      </p>
      <p>
        <StyledButton variant="outline">One</StyledButton>
      </p>
      <p>
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </p>
    </>
  );
};
