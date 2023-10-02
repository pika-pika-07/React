import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restrauntData, setRestrauntData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `https://polar-falls-86526-4fb527053833.herokuapp.com/${MENU_API_URL}${resId}`;
    const data = await fetch(url);
    const json = await data.json();
    setRestrauntData(json?.data);
  };
  return restrauntData;
};

export default useRestaurantMenu;
