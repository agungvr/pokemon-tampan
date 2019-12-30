import React from "react";

export const Loader1 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        alt="pokemon-tampan"
        src={require("../../assets/images/loading_1.gif")}
        width="340px"
        height="auto"
        style={{ margin: "20vh 0px" }}
        alt="Loading..."
      />
    </div>
  );
};

export const Loader2 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        alt="pokemon-tampan"
        src={require("../../assets/images/loading_2.gif")}
        width="340px"
        height="auto"
        style={{ margin: "20vh 0px" }}
        alt="Loading..."
      />
    </div>
  );
};
