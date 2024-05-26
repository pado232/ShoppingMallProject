import React from "react";

const Container = ({ children }) => {
  const containerStyle = {
    position: "relative",
    top: "220px",
    // left: "50%",
    transform: "translate(0%, 0%)",
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    width: "1360px",
    margin: "auto",
    paddingBottom: "300px",
  };
  return (
    <div className="Container" style={containerStyle}>
      <div className="container_content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Container;
