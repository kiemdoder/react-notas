import { Text } from "../components/basic-styled-system/Text";

export const TextPage = () => {
  const text = "Very long clipped text with tooltip";
  return (
    <>
      <Text width="50px" overflowToolTip={text}>
        {text}
      </Text>
    </>
  );
};
