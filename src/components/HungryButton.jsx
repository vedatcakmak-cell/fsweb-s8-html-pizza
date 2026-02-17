import React from "react";
import { Link } from "react-router-dom";

const HungryButton = () => {
  return (
    <Link to="/order" style={{ display: "inline-block" }}>
      <button style={styles.button}>Acıktım</button>
    </Link>
  );
};

const styles = {
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    fontFamily: "Barlow, sans-serif",
    width: "193.27px",
    height: "56px",
    fontWeight: "bold",
    borderRadius: "50px",
    backgroundColor: "#FDC913",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
    color: "#292929",
    marginTop: "10px",
  },
};

export default HungryButton;
