import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({
  isFormValid,
  selectedIngredients = [],
  quantity = 1,
  size,
  dough,
  name,
  note,
}) => {
  const extraUnitPrice = 5;
  const basePrice = 85.5;

  const selectedExtras = selectedIngredients.length * extraUnitPrice;
  const totalPrice = (basePrice + selectedExtras) * quantity;

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!isFormValid) return;

    navigate("/order-confirmation", {
      state: {
        productName: "Position Absolute Acı Pizza",
        size,
        dough,
        extras: selectedIngredients,
        quantity,
        customerName: name,
        note,
        prices: {
          base: basePrice,
          extraUnit: extraUnitPrice,
        },
      },
    });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Sipariş Toplamı</h3>

      <div style={styles.row}>
        <span>Seçimler</span>
        <span>{selectedExtras.toFixed(2)}₺</span>
      </div>

      <div style={styles.row}>
        <span style={styles.totalLabel}>Toplam</span>
        <span style={styles.totalValue}>{totalPrice.toFixed(2)}₺</span>
      </div>

      <button
        className="order-summary__btn"
        onClick={handleSubmit}
        style={{
          ...styles.button,
          opacity: isFormValid ? 1 : 0.5,
          cursor: isFormValid ? "pointer" : "not-allowed",
        }}
        disabled={!isFormValid}
      >
        SİPARİŞ VER
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "531px",
    padding: "24px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Barlow, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    margin: 0,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
  },
  totalLabel: {
    fontWeight: "700",
    color: "#CE2829",
  },
  totalValue: {
    fontWeight: "700",
    color: "#CE2829",
  },
  button: {
    marginTop: "16px",
    padding: "12px",
    backgroundColor: "#FDC913",
    color: "#000",
    fontWeight: "600",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
  },
};

export default OrderSummary;
