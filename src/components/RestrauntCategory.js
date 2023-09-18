import { useState } from "react";

import ItemList from "./ItemList";
const RestrauntCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-1/2 mx-auto my-5 bg-gray-90 shadow-lg p-4 ">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>👇</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestrauntCategory;
