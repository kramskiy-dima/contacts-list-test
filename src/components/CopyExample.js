import { useState, useCallback } from "react";
import { Button } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    marginRight: 10,
  },
  btn: {
    textTransform: "lowercase",
  },
}));

const CopyExample = ({ text }) => {
  const classes = useStyles();

  const [, copyToClipboard] = useCopyToClipboard();
  const [tooltipTitle, setTooltipTitle] = useState("Copy");

  const handleClick = useCallback(() => {
    copyToClipboard(text);
    setTooltipTitle("Copied");
  }, [copyToClipboard, text]);

  return (
    <ClickAwayListener onClickAway={() => setTooltipTitle("Copy")}>
      <Tooltip title={tooltipTitle} placement="top" arrow>
        <Button
          color="primary"
          className={classes.btn}
          size="small"
          onClick={handleClick}
        >
          <FileCopyOutlinedIcon className={classes.icon} fontSize="small" />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default CopyExample;
