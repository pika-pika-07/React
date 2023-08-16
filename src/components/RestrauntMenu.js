import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const [restrauntData, setrestrauntData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=41298&catalog_qa=undefined&submitAction=ENTER";
    const data = await fetch(url);
    const json = await data.json();

    const refractoredData = json?.data;
    setrestrauntData(refractoredData);
  };

  if (restrauntData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restrauntData.cards[0]?.card?.card?.info;

  const { itemCards } =
    restrauntData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1> Name of the restraunt : {name}</h1>

      <h3> {costForTwoMessage}</h3>
      <h3> Cuisines </h3>
      <ul>
        {cuisines.map((cuisine) => {
          return <li>{cuisine}</li>;
        })}
      </ul>
      <h3> Menu </h3>
      <ul>
        {itemCards.map((card) => {
          return <li>{card?.card?.info?.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
