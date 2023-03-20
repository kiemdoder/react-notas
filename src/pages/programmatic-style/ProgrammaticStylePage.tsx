import { CSSProperties, useState } from "react";
import "./ProgrammaticStylePage.scss";

const buttonStyle: CSSProperties = {
  color: "lightblue",
  background: "darkgray",
};

export const ProgrammaticStylePage = () => {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => setAlert((a) => !a);

  return (
    <>
      <h4 className={alert ? "alert" : ""}>Programmatic style</h4>
      <button onClick={toggleAlert} style={buttonStyle}>
        Alert {alert ? "off" : "on"}
      </button>
    </>
  );
};
