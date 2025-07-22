import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../../utils/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const [menuList, resturantMenuList] = useResturantMenu(resId);

  if (resturantMenuList === null) {
    return <Shimmer></Shimmer>;
  }

  const {
    name,
    avgRatingString,
    cuisines,
    totalRatingsString,
    costForTwoMessage,
  } = resturantMenuList?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="resturantMenu">
      <h1>{name}</h1>
      <h3>
        {avgRatingString} ({totalRatingsString}) - {costForTwoMessage}
      </h3>
      <p>{cuisines.join(", ")}</p>
      <h2>Menu</h2>
      {menuList.map((menu) => {
        return (
          <div key={menu.card.card.categoryId}>
            <ul>{menu.card.card.title}</ul>
            <div>
              {menu?.card?.card?.itemCards?.map((item) => {
                return (
                  <div key={item?.card?.info?.id}>
                    <li>
                      {item?.card?.info?.name} - Rs.{" "}
                      {item?.card?.info?.price / 100}
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResturantMenu;
