import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

import Topbar from "./Topbar";

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

function MainLayout(props: IMainLayoutProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.wrapper}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
