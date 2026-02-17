import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderDescription from "../components/OrderDescription";
import ProductInfo from "../components/ProductInfo";
import DoughOptions from "../components/DoughOptions";
import SizeOptions from "../components/SizeOptions";
import ExtraIngredients from "../components/ExtraIngredients";
import OrderNote from "../components/OrderNote";
import QuantitySelector from "../components/QuantitySelector";
import OrderSummary from "../components/OrderSummary";
import NameInput from "../components/NameInput";

const OrderPage = () => {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [name, setName] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const isSizeValid = size !== "";
  const isDoughValid = dough !== "";
  const isNameValid = name.trim().length >= 3;
  const isToppingsValid =
    selectedIngredients.length >= 4 && selectedIngredients.length <= 10;

  const isFormValid = isSizeValid && isDoughValid && isNameValid && isToppingsValid;

  const navigate = useNavigate();

  const handleMobileSubmit = () => {
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
          base: 85.5,
          extraUnit: 5,
        },
      },
    });
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 768px) {
        .order-summary__btn { display: none !important; }
        .mobile-actions { display: grid !important; }
        .qty-inline { display: none !important; }
      }
      @media (min-width: 769px) {
        .mobile-actions { display: none !important; }
        .qty-inline { display: flex !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      style={{
        width: "100dvw",
        marginLeft: "calc(50% - 50dvw)",
        minHeight: "100svh",
        backgroundColor: "#F5F5F5",
        paddingTop: "207px",
        paddingBottom: "48px",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          margin: "0 auto",
          padding: "32px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ width: "100%", maxWidth: "531px", margin: "0 auto" }}>
          <ProductInfo />
        </div>

        <div style={{ width: "100%", maxWidth: "531px", margin: "0 auto" }}>
          <OrderDescription />
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "531px",
            margin: "0 auto",
            display: "flex",
            gap: "16px",
            flexWrap: "nowrap",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <SizeOptions size={size} onSizeChange={(e) => setSize(e.target.value)} />
          </div>

          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <DoughOptions dough={dough} onDoughChange={(e) => setDough(e.target.value)} />
          </div>
        </div>

        <div style={{ width: "100%", maxWidth: "531px", margin: "0 auto" }}>
          <ExtraIngredients
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
          />
        </div>

        <OrderNote value={note} onChange={(e) => setNote(e.target.value)} />

        <div
          style={{
            width: "100%",
            maxWidth: "531px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <div style={{ flex: "1 1 260px" }}>
            <NameInput value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="qty-inline" style={{ display: "flex" }}>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>

        <OrderSummary
          isFormValid={isFormValid}
          selectedIngredients={selectedIngredients}
          quantity={quantity}
          size={size}
          dough={dough}
          name={name}
          note={note}
        />

        <div
          className="mobile-actions"
          style={{
            width: "100%",
            maxWidth: "531px",
            margin: "0 auto",
            display: "none",
            gap: "16px",
            height: "57px",
            gridTemplateColumns: "170px 1fr",
            alignItems: "stretch",
          }}
        >
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} compact />

          <button
            onClick={handleMobileSubmit}
            disabled={!isFormValid}
            style={{
              height: "57px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#FDC913",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              opacity: isFormValid ? 1 : 0.5,
              cursor: isFormValid ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
          >
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
