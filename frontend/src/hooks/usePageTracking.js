import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("config", "G-NTNCFTX0SN", {
      page_path: location.pathname,
    });
  }, [location]);
};

export default usePageTracking;
