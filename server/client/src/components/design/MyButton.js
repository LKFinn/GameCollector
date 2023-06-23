import React from "react";
import Button from "@mui/material/Button";

function MyButton({ message, onClick }) {
  return (
    <div>
      <Button
        variant="contained"
        onClick={onClick}
        style={{
          background: "#202222",
          border: "none",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          color: "pink",
          padding: "12px 24px",
          marginTop: "16px",
          display: "block",
          margin: "0 auto",
        }}
      >
        {message}
      </Button>
    </div>
  );
}
export default MyButton