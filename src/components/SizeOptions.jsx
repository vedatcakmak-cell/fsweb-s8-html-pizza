import React from "react";

const SizeOptions = ({ size, onSizeChange }) => {
  return (
    <div style={styles.container}>
      <p style={styles.title}>Boyut Seç</p>

      <label style={styles.label}>
        <input type="radio" name="size" value="küçük" checked={size === "küçük"} onChange={onSizeChange} />
        Küçük
      </label>

      <label style={styles.label}>
        <input type="radio" name="size" value="orta" checked={size === "orta"} onChange={onSizeChange} />
        Orta
      </label>

      <label style={styles.label}>
        <input type="radio" name="size" value="büyük" checked={size === "büyük"} onChange={onSizeChange} />
        Büyük
      </label>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Barlow, sans-serif",
  },
  title: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#292929",
    margin: 0,
    textAlign: "left",
  },
  label: {
    fontSize: "14px",
    color: "#292929",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default SizeOptions;
