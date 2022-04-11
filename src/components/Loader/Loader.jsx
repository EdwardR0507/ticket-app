import React from "react";
import { Spin } from "antd";

const styles = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const Loader = () => {
  return (
    <div style={styles}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
