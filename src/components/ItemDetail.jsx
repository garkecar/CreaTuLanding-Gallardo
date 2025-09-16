import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{product.image}</h1>
      <h2>{product.name}</h2>

      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <p>Stock: {product.stock}</p>

      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      ) : (
        <div style={{ marginTop: "1rem" }}>
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
