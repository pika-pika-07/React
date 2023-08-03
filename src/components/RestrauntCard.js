import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img src={`${CDN_URL}/${cloudinaryImageId}`} className="res-logo" />
      <h4>{name}</h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestrauntCard;
