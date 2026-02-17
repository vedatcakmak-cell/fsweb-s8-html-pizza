import React from "react";
import { useLocation } from "react-router-dom";

const OrderConfirmationMessage = () => {
  const { state } = useLocation();

  if (!state) {
    return <div style={{ color: "white" }}>Sipariş bilgisi bulunamadı.</div>;
  }

  const { productName, size, dough, extras, quantity, prices } = state;

  const extrasTotal = (extras?.length || 0) * prices.extraUnit;
  const onePizzaTotal = prices.base + extrasTotal;
  const total = onePizzaTotal * quantity;

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          maxWidth: "724px",
          fontFamily: '"Roboto Condensed", sans-serif',
          fontWeight: 300,
          fontSize: "60px",
          lineHeight: "66px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          margin: "0 auto",
          color: "white",
        }}
      >
        TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
      </div>

      <div style={{ marginTop: "24px", fontSize: "18px", color: "white" }}>
        <p>
          <b>{productName}</b>
        </p>
        <p>
          Boyut: <b>{size}</b>
        </p>
        <p>
          Hamur: <b>{dough}</b>
        </p>
        <p>
          Ek Malzemeler: <b>{extras?.length ? extras.join(", ") : "Yok"}</b>
        </p>
        <p>
          Adet: <b>{quantity}</b>
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          border: "1px solid white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "left",
          width: "320px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
        }}
      >
        <p>
          <b>Sipariş Toplamı</b>
        </p>
        <p>Seçimler: {extrasTotal.toFixed(2)}₺</p>
        <p>
          <b>Toplam: {total.toFixed(2)}₺</b>
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmationMessage;
