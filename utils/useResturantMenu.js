import { useEffect, useState } from "react";
import { MENU_URL } from "./url";

const useResturantMenu = (resId) => {
  const [resturantMenuList, setResturantMenuList] = useState(null);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const menuData = await data.json();
    setResturantMenuList(menuData);
    if (
      !menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        .card.card.itemCards
    ) {
      setResInfo(
        menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
          2,
          -2
        )
      );
    } else {
      setResInfo(
        menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
          1,
          -2
        )
      );
    }

    console.log(resInfo);
  };

  return [resInfo, resturantMenuList];
};

export default useResturantMenu;
