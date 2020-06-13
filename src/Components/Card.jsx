import React from "react";
import "tachyons";
const Card = ({ name, email, id }) => (
  <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
    <img src={`https://robohash.org/${id}?size=200x200`} alt={name} />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;