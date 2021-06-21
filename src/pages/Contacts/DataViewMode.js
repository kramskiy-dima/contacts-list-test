import { useCallback } from "react";
import { DATA_VIEW_MODE } from "./constants";

import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

export const DataViewMode = ({ dataViewMode, setDataViewMode }) => {
  const handleChange = useCallback(
    (_, nextView) => {
      setDataViewMode(nextView);
    },
    [setDataViewMode]
  );
  return (
    <ToggleButtonGroup value={dataViewMode} exclusive onChange={handleChange}>
      <ToggleButton value={DATA_VIEW_MODE.TABLE} aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value={DATA_VIEW_MODE.GRID} aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
