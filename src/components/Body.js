import { SampleData } from "../utils/sampleData";
import RestrauntCard from "./RestrauntCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {SampleData.map((data) => {
          return (
            <RestrauntCard
              key={data.info.id}
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
