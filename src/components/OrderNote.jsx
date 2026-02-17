import React from "react";

const OrderNote = ({ value, onChange }) => {
  return (
    <div style={styles.container}>
      <label htmlFor="orderNote" style={styles.label}>
        Sipariş Notu
      </label>
      <textarea
        id="orderNote"
        value={value}
        onChange={onChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        style={styles.textarea}
      />
    </div>
  );
};

const styles = {
  container: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "531px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
    fontFamily: "Barlow, sans-serif",
    color: "#292929",
    textAlign: "left",
  },
  textarea: {
    width: "100%",
    height: "56px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#CCCCCC",
    borderRadius: "6px",
    padding: "12px",
    fontSize: "14px",
    fontFamily: "Barlow, sans-serif",
    lineHeight: "1.5",
    outline: "none",
    resize: "none",
    boxSizing: "border-box",
    backgroundColor: "#fff",
  },
};

export default OrderNote;
