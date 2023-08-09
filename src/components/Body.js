import { useState, useEffect } from "react";

import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const [restraunts, setRestraunts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const res =
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const resInfo = res.map((res) => res.info);
    setRestraunts(resInfo);
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = SampleData.filter((res) => res.avgRating > 4);
            setRestraunts(filteredList);
          }}
          className="filter-btn"
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {restraunts.map((data) => {
          return (
            <RestrauntCard
              key={data.id}
              resData={data}
              resName="Macdonalds"
              cuisine="Mexican, Asian"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
