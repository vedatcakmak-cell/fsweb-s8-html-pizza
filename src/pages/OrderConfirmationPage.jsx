import React from "react";
import OrderConfirmationMessage from "../components/OrderConfirmationMessage";

const OrderConfirmationPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#CE2829",
        width: "100vw",
        minHeight: "100vh",
        paddingTop: "207px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "white",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px", padding: "40px 16px" }}>
        <OrderConfirmationMessage />
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
