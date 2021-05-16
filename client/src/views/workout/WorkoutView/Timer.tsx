import React, { useState, useEffect } from "react";

import { Box, Typography } from "@material-ui/core";
import moment from "moment";

interface ITimerProps {
  isStarted: boolean;
  variant: "timer" | "stopwatch";
  start?: number;
  label?: string;
  textSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "caption";
  onComplete?: () => void;
}

export default function Timer(props: ITimerProps) {
  const [time, setTime] = useState(
    props.variant === "timer" ? props.start! : 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.isStarted)
        props.variant === "timer" ? setTime(time - 1) : setTime(time + 1);

      if (props.isStarted && props.variant === "timer" && time === 0) {
        setTime(0);
        props.onComplete && props.onComplete();
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Box textAlign="center">
      <Typography variant={props.textSize ? props.textSize : "h3"}>
        {moment().hour(0).minute(0).second(time).format("HH : mm : ss")}
      </Typography>
      <Typography variant="caption">{props.label}</Typography>
    </Box>
  );
}
