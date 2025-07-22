import { useRouteError } from "react-router";

const Error = () => {
  const errorDetail = useRouteError();
  console.log(errorDetail);
  return (
    <div>
      <h1>!!!! Opps</h1>
      {/* <h2>{errorDetail?.error?.message}</h2> */}
    </div>
  );
};

export default Error;
