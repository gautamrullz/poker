import { itemListElement } from "../../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredResturantList, setFilteredResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    setFilteredResturantList(
      resturantList.filter(
        (resturant) => resturant?.card?.card?.info?.avgRating > 4
      )
    );
  };

  const fetchData = async () => {
    const getData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.7956531&lng=86.43038589999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const jsonData = await getData.json();
    const dataList = jsonData?.data?.cards?.slice(3);
    setResturantList(dataList);
    setFilteredResturantList(dataList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div>
        <h1>Looks Like you are Offline !!!!!!!!!!!!!!!!!!</h1>
      </div>
    );
  }

  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyContainer">
      <div className="flex justify-evenly">
        <div className="m-5">
          <input
            className="p-5 border-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-5 border-2 border-black bg-black text-white cursor-pointer"
            onClick={() => {
              const filterList = resturantList.filter((resturant) => {
                return resturant?.card?.card?.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResturantList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-5">
          <button
            className="p-5 border-2 bg-black text-white cursor-pointer"
            onClick={handleClick}
          >
            Top rated resturant
          </button>
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {filteredResturantList.map((resturant) => {
          return (
            <Link
              className="m-8"
              to={"/resturant/" + resturant?.card?.card?.info?.id}
              key={resturant?.card?.card?.info?.id}
            >
              <ResturantCard resturantList={resturant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
