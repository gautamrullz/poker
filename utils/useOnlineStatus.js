import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onleStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    checkStatus();
  }, []);
  const checkStatus = () => {
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", (event) => {
        setOnlineStatus(false);
      });
  };
  return onleStatus;
};

export default useOnlineStatus;
