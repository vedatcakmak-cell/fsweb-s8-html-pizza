import React from "react";

const QuantitySelector = ({ quantity = 1, setQuantity, compact = false }) => {
  const decrease = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const increase = () => {
    setQuantity((q) => q + 1);
  };

  return (
    <div style={compact ? styles.wrapperCompact : styles.wrapper}>
      <div style={styles.container}>
        <button style={styles.button} onClick={decrease} type="button">
          -
        </button>
        <div style={styles.count}>
          <span>{quantity}</span>
        </div>
        <button style={styles.button} onClick={increase} type="button">
          +
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: "170px",
    height: "89px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  wrapperCompact: {
    width: "170px",
    height: "57px",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
  },
  container: {
    width: "170px",
    height: "57px",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxSizing: "border-box",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  button: {
    fontSize: "20px",
    width: "56px",
    height: "57px",
    border: "none",
    backgroundColor: "#FDC913",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
  },
  count: {
    fontSize: "18px",
    fontWeight: "600",
    width: "58px",
    height: "57px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderLeft: "1px solid #ccc",
    borderRight: "1px solid #ccc",
    lineHeight: 1,
  },
};

export default QuantitySelector;
