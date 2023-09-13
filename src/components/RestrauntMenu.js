import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const restrauntData = useRestaurantMenu(resId);

  if (restrauntData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restrauntData.cards[0]?.card?.card?.info;

  const { categories } =
    restrauntData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1> Name of the restraunt : {name}</h1>

      <h3> {costForTwoMessage}</h3>
      <h3> Cuisines </h3>
      <ul>
        {cuisines.map((cuisine, index) => {
          return <li key={index}>{cuisine}</li>;
        })}
      </ul>
      <h3> Menu </h3>
      <ul>
        {categories.map((card, index) => {
          return <li key={index}>{card?.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
