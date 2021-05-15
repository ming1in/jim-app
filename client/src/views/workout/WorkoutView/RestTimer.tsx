import React, { useState, useEffect } from "react";

import { Box, Typography } from "@material-ui/core";
import moment from "moment";

import CircleProgress from "./CircleProgress";

interface ITimerProps {
  isStarted: boolean;
  onComplete?: () => void;
}

export default function RestTimer(props: ITimerProps) {
  const [time, setTime] = useState(30);

  const progress = (time / 30) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.isStarted) setTime(time - 1);

      if (props.isStarted && time === 0) {
        setTime(30);
        props.onComplete && props.onComplete();
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Box flexGrow={1} display="flex" alignItems="center">
      <CircleProgress value={progress}>
        <Box>
          <Box textAlign="center">
            <Typography variant={"h5"}>
              {moment().hour(0).minute(0).second(time).format("HH : mm : ss")}
            </Typography>
            <Typography variant="caption">Rest</Typography>
          </Box>
        </Box>
      </CircleProgress>
    </Box>
  );
}
