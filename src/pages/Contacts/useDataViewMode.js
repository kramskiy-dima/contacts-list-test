import { useState, useEffect } from "react";
import { DATA_VIEW_MODE } from "./constants";

export const useDataViewMode = () => {
  const [dataViewMode, setDataViewMode] = useState(
    localStorage.getItem("viewMode") || DATA_VIEW_MODE.TABLE
  );
  useEffect(() => {
    localStorage.setItem("viewMode", dataViewMode);
  }, [dataViewMode]);

  return [dataViewMode, setDataViewMode];
};
