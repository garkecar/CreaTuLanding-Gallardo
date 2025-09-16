import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { cartTotal } = useCart();

  return (
    <Link
      to="/cart"
      style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
    >
      <span style={{ fontSize: "1.5rem" }}>🛒</span>
      {cartTotal > 0 && (
        <span style={{ marginLeft: "0.5rem" }}>{cartTotal}</span>
      )}
    </Link>
  );
};

export default CartWidget;
