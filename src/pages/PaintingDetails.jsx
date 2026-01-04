
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../api/api";

export default function PaintingDetails() {
  const { id } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/paintings/${id}`)
      .then(res => res.json())
      .then(setPainting);
  }, []);

  if (!painting) return null;

  return (
    <div className="container">
      <img src={painting.image} />
      <h2>{painting.title}</h2>
      <p>{painting.description}</p>
      <h4>Story</h4>
      <p>{painting.story}</p>
    </div>
  );
}
