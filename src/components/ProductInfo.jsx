import React from "react";

const ProductInfo = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Position Absolute Acı Pizza</h2>

      <div style={styles.bottomRow}>
        <p style={styles.price}>85.50₺</p>
        <p style={styles.rating}>
          4.9 <span style={styles.commentCount}>(200)</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "531px",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxSizing: "border-box",
    marginTop: '-20px'
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
    fontFamily: "Barlow, sans-serif",
    color: "#000",
    margin: 0,
    lineHeight: "32px",
    textAlign: "left",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#000",
    margin: 0,
  },
  rating: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#5F5F5F",
    margin: 0,
  },
  commentCount: {
    color: "#B0B0B0",
    marginLeft: "4px",
  },
};

export default ProductInfo;
