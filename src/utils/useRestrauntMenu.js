import { useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaruntMenu = (resId) => {
  const [restrauntData, setRestrauntData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `${MENU_API_URL}${resId}`;
    const data = await fetch(url);
    const json = await data.json();
    setRestrauntData(json?.data);
  };
  return restrauntData;
};

export default useRestaruntMenu;
