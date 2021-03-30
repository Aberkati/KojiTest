import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article: { id, title, body } }) => {
  return (
    <div className="card" key={id}>
      <h4>{title}</h4>
      <p> {body}</p>
      <Link to={`/post/${id}`}>Voir Plus</Link>
    </div>
  );
};

export default Card;
