import { useState, useEffect } from "react";
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restraunts, setRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestrauntCardPromoted = withPromotedLabel(RestrauntCard);

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
    debugger;
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
      <div className="flex">
        <div className="m-4 p-4 flex items-center">
          <button
            onClick={() => {
              const filteredList = filteredRestraunts.filter(
                (res) => res.avgRating > 4.4
              );
              setFilteredRestraunts(filteredList);
            }}
            className="my-5 px-4 py-2 bg-green-200 rounded-lg"
          >
            Top Rated Restraunts
          </button>
        </div>

        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={onTextChange}
          />
          <button className="p-4 m-4" onClick={filterCards}>
            {" "}
            Search{" "}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestraunts.map((data) => {
          return (
            <Link to={`/restraunts/${data.id}`} key={data.id}>
              {data.avgRating > 4.2 ? (
                <RestrauntCardPromoted resData={data} />
              ) : (
                <RestrauntCard resData={data} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
