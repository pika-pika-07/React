import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const restrauntData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restrauntData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restrauntData.cards[0]?.card?.card?.info;

  const categories =
    restrauntData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(cuisines);
  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl"> {name}</h1>

      <h3> {costForTwoMessage}</h3>
      <h3> Cuisines </h3>
      <ul className="font-bold ">{cuisines}</ul>
      <h3> Menu </h3>
      <ul>
        {categories.map((card, index) => {
          return (
            <RestrauntCategory
              key={card?.card?.title}
              data={card?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => {
                if (index === showIndex) {
                  setShowIndex(null);
                } else {
                  setShowIndex(index);
                }
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
