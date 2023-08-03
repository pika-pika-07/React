import { useState } from "react";
import { SampleData } from "../utils/sampleData";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const [restraunts, setRestraunts] = useState(SampleData);
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
