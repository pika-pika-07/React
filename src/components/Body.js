import { SampleData } from "../utils/sampleData";
import RestrauntCard from "./RestrauntCard";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            console.log("clicked");
          }}
          className="filter-btn"
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {SampleData.map((data) => {
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
