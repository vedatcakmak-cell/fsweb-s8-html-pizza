import React from "react";

const OrderDescription = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "532px",
    opacity: 1,
    padding: "0 16px",
  },
  text: {
    fontFamily: "Barlow",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "28.8px",
    letterSpacing: "0%",
    color: "#5F5F5F",
    margin: 0,
    textAlign: "left",
    wordBreak: "break-word",
  },
};

export default OrderDescription;
