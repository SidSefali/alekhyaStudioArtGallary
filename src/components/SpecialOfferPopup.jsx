
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SpecialOfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("offerSeen")) {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>🎉 Special Offer</h3>
        <p>Register & get 15% OFF your first order</p>
        <Link to="/register" onClick={() => setShow(false)}>Register</Link>
        <button onClick={() => {
          localStorage.setItem("offerSeen", true);
          setShow(false);
        }}>Close</button>
      </div>
    </div>
  );
}
