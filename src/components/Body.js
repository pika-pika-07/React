import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state varibles change, react triggers a reconciliation cycle(re-renders the component)
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
    setFilteredRestraunts(resInfo);
  };

  const filterCards = () => {
    const filtered = restraunts.filter((restraunt) =>
      restraunt.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestraunts(filtered);
  };

  const onTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline</h1>;
  }
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
          return (
            <Link to={`/restraunts/${data.id}`} key={data.id}>
              {" "}
              <RestrauntCard resData={data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
