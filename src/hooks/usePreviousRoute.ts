import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const usePreviousRoute = () => {
  const location = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;

    return () => {
      previousPathRef.current = currentPath;
    };
  }, [location]);

  return previousPathRef.current;
};
