import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext.jsx";

const CheckoutForm = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: Timestamp.fromDate(new Date()),
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>¡Agradecemos tu compra!</h2>
        <p>
          Tu número de orden es: <b>{orderId}</b>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2>Finalizar compra</h2>
      <input
        name="name"
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        name="email"
        type="email"
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="phone"
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;
