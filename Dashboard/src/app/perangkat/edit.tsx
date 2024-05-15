import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 2,
    padding: "5px 10px",
    fontSize: "0.875rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const SearchButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={onClick}>
      Cari
    </Button>
  );
};

export default SearchButton;