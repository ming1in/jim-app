import React from "react";

import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "261px",
    },
    text: {
      position: "relative",
      left: "-80px",
    },
  })
);

export default function Logo(props: any) {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center">
      <img
        className={clsx(classes.root, props.className)}
        src="/static/logo.png"
        alt="Logo"
      />
      <Typography variant="h3" className={classes.text} color="secondary">
        JIM
      </Typography>
    </Box>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};
