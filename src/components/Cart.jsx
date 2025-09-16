import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, cartAmount } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>🔘 Tu carrito está vacío</h2>
        <p>Agrega productos para continuar con tu compra.</p>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            background: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
          }}
        >
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>🛍️ Carrito de compras</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "0.75rem 0",
          }}
        >
          <div>
            <h4 style={{ margin: "0 0 0.25rem 0" }}>{item.name}</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
              Cantidad: {item.quantity} × ${item.price}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>
              ${item.price * item.quantity}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "0.4rem 0.7rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: "2rem", textAlign: "right" }}>
        <h3>
          Total: $
          {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <button
            onClick={clearCart}
            style={{
              background: "#6c757d",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            🗑️ Vaciar carrito
          </button>

          <Link
            to="/checkout"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                background: "#28a745",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ✅ Finalizar compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
