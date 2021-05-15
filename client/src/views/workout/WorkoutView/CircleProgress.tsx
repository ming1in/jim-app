import React from "react";

import { Box, Typography, CircularProgress } from "@material-ui/core";

interface ICircleProgressProps {
  value: number;
  className?: any;
  children: React.ReactChild
}

export default function CircleProgress(props: ICircleProgressProps) {
  return (
    <Box position="relative" display="inline-flex" flexGrow={1} justifyContent="center">
      <CircularProgress variant="determinate" {...props} size="100%"/>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
       {props.children}
      </Box>
    </Box>
  );
}
