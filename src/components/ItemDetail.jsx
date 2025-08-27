import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${product.name}`);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        alignItems: "start",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "8rem",
            marginBottom: "1rem",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          {product.image}
        </div>
      </div>

      <div>
        <Link
          to="/"
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontSize: "0.9rem",
            marginBottom: "1rem",
            display: "inline-block",
          }}
        >
          ← Volver al catálogo
        </Link>

        <h1
          style={{
            color: "#333",
            marginBottom: "1rem",
            fontSize: "2.5rem",
          }}
        >
          {product.name}
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            fontSize: "2rem",
            color: "#007bff",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          ${product.price}
        </div>

        <p
          style={{
            color: "#888",
            marginBottom: "2rem",
          }}
        >
          Stock disponible: {product.stock} unidades
        </p>

        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetail;
