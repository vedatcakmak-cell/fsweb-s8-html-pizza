import React from "react";

const NameInput = ({ value, onChange, error }) => {
  return (
    <div style={styles.container}>
      <label style={styles.label}>Adınızı Giriniz:</label>
      <input
        type="text"
        placeholder="Adınızı giriniz"
        id="name"
        value={value}
        onChange={onChange}
        name="name"
        style={{
          ...styles.input,
          border: error ? "2px solid red" : "1px solid #ccc",
        }}
        required
        minLength={3}
      />
      {error && <p style={styles.error}>İsim en az 3 karakter olmalı</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "89px",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "8px",
    fontFamily: "Barlow, sans-serif",
    fontWeight: 600,
    color: "#292929",
  },
  input: {
    height: "57px",
    padding: "10px 12px",
    borderRadius: "6px",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "Barlow, sans-serif",
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontSize: "14px",
    margin: "6px 0 0 0",
    textAlign: "left",
  },
};

export default NameInput;
