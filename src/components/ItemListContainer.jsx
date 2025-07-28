const ItemListContainer = ({ textType = "welcome" }) => {
  const texts = {
    welcome: "¡Bienvenido a nuestra tienda online!",
    offers: "¡Descubre nuestras ofertas especiales!",
    products: "Explora nuestra amplia gama de productos",
  };

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          color: "orange",
          fontSize: "2rem",
          fontWeight: "300",
        }}
      >
        {texts[textType]}
      </h2>
    </div>
  );
};

export default ItemListContainer;
