import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return <div>Error:</div>;
};

export default Error;
