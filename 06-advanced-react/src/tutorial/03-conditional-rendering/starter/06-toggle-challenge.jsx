import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="container">
      <h1 style={{ marginBottom: "2rem" }}>Toggle Challenge</h1>
      {showAlert && <Alert />}
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        Toogle
      </button>
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">This is a Alert!</div>;
};

export default ToggleChallenge;
