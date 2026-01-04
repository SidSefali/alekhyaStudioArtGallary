
import { useEffect, useState } from "react";
import { API_URL } from "../api/api";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/paintings`)
      .then(res => res.json())
      .then(setPaintings);
  }, []);

  return (
    <div className="container grid">
      {paintings.map(p => (
        <div className="card" key={p._id}>
          <img src={p.image} />
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <Link to={`/painting/${p._id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
