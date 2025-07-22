import { LOGO_UTL } from "../../utils/url";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex bg-black text-white p-5 justify-between">
      <div className="logoContainer">
        <img className="h-10" src={LOGO_UTL} />
      </div>
      <div className="">
        <ul className="flex">
          <li className="p-2 flex-wrap">Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-2 flex-wrap">
            <Link className="navOption" to="/">
              Home
            </Link>
          </li>
          <li className="p-2 flex-wrap">
            <Link className="navOption" to="/contact">
              Contact
            </Link>
          </li>
          <li className="p-2 flex-wrap">
            <Link className="navOption" to="/about">
              About
            </Link>
          </li>
          <li className="p-2 flex-wrap">
            <Link className="navOption" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
