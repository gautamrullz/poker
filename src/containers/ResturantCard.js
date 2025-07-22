import { RES_IMG } from "../../utils/url";

const ResturantCard = (props) => {
  const { resturantList } = props;
  return (
    <div className="border-2 w-75 h-100 p-4 rounded-lg bg-black text-white">
      <div className="">
        <img
          className="rounded-lg"
          src={`${RES_IMG}/${resturantList?.card?.card?.info?.cloudinaryImageId}`}
        />
      </div>
      <div className="pt-5">
        <h3 className="font-bold">{resturantList?.card?.card?.info?.name}</h3>
        <p className="mt-2">{resturantList?.card?.card?.info?.cuisines.join(", ")}</p>
        <p>{resturantList?.card?.card?.info?.avgRating}</p>
        <p>{resturantList?.card?.card?.info?.areaName}</p>
      </div>
    </div>
  );
};

export default ResturantCard;
