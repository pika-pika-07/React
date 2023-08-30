import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  return (
    <div
      className="p-5 bg-[#f0f0f1] m-5 w-80 
      
      border border-solid border-black
    rounded-lg hover:bg-green-800"
    >
      <img
        src={`${CDN_URL}/${cloudinaryImageId}`}
        className="w-full h-1/2 rounded-lg"
      />
      <div className="font-bold py-4 text-lg">{name}</div>
      <div className="text-sm break-words">{cuisines.join(",")}</div>
      <div>{avgRating}</div>
      <div>{costForTwo}</div>
    </div>
  );
};
export default RestrauntCard;
