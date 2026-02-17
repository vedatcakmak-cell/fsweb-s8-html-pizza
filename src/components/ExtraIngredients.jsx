import React from "react";

const ExtraIngredients = ({ selectedIngredients, setSelectedIngredients }) => {
  const extraIngredients = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Zeytin",
    "Ananas",
    "Kabak",
  ];

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      if (selectedIngredients.length < 10) {
        setSelectedIngredients([...selectedIngredients, value]);
      }
    } else {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== value));
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Ek Malzemeler</p>
      <p style={styles.description}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>

      <div style={styles.checkboxList}>
        {extraIngredients.map((item, index) => (
          <label key={index} style={styles.label}>
            <input
              type="checkbox"
              value={item}
              checked={selectedIngredients.includes(item)}
              onChange={handleIngredientChange}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "32px",
    fontFamily: "Barlow, sans-serif",
    width: "100%",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#292929",
    marginBottom: "4px",
    textAlign: "left",
  },
  description: {
    fontSize: "14px",
    color: "#5F5F5F",
    marginBottom: "12px",
    textAlign: "left",
  },
  checkboxList: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
  },
  label: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default ExtraIngredients;
