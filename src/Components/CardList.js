import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardArray = robots.map((robot) => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));
  return (
    <React.StrictMode>
      <div>{cardArray}</div>
    </React.StrictMode>
  );
};

export default CardList;
