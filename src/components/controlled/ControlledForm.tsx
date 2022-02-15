import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [applyValidation, setApplyValidation] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [enabled, setEnabled] = useState(false);

  // Error checking
  useEffect(() => {
    if (applyValidation) {
      if (name.length === 0) {
        setNameError("Name required");
      } else if (name.length <= 2) {
        setNameError("Name should be longer than 2 characters");
      } else {
        setNameError("");
      }
    }
  }, [applyValidation, name]);

  return (
    <div>
      {nameError && <p>{nameError}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        id="enabled"
        type="checkbox"
        placeholder="Enabled"
        checked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />
      <label htmlFor="enabled">Enabled</label>

      <br />

      <button
        onClick={(e) => {
          setApplyValidation(true);
        }}
      >
        Submit
      </button>
    </div>
  );
};
