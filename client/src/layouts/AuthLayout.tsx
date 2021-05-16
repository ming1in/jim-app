import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      display: "flex",
      height: "100%",
      overflow: "hidden",
      width: "100%",
    },
    wrapper: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
      minHeight: "100vh",
      paddingTop: 64,
    },
    content: {
      flex: "1 1 auto",
      height: "100%",
      overflow: "auto",
    },
  })
);

export default function AuthLayout(props: IMainLayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}
