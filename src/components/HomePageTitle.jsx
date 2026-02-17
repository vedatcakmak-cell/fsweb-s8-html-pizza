import React from "react";

const HomePageTitle = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <span style={styles.line1}>KOD ACIKTIRIR</span>
        <span style={styles.line2}>PİZZA, DOYURUR</span>
      </h1>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "693px",
    padding: "0 16px",
  },
  title: {
    margin: 0,
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto Condensed, sans-serif",
    fontWeight: "180",
    letterSpacing: "0.5px",
  },
  line1: {
    display: "block",
    fontSize: "clamp(34px, 6.2vw, 56px)",
    lineHeight: "1.05",
    marginBottom: "12px",
  },
  line2: {
    display: "block",
    fontSize: "clamp(40px, 7.2vw, 64px)",
    lineHeight: "1.05",
  },
};

export default HomePageTitle;
