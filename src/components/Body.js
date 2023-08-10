import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const res =
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const resInfo = res.map((res) => res.info);
    setRestraunts(resInfo);
    setFilteredRestraunts(resInfo);
  };

  const filterCards = () => {
    const filtered = restraunts.filter((restraunt) =>
      restraunt.name.toLowerCase().includes(searchText)
    );
    setFilteredRestraunts(filtered);
  };

  const onTextChange = (e) => {
    setSearchText(e.target.value);
  };

  return restraunts.length == 0 ? (
    <Shimmer />
  ) : (
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
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={onTextChange}
          />
          <button onClick={filterCards}> search </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestraunts.map((data) => {
          return <RestrauntCard key={data.id} resData={data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
