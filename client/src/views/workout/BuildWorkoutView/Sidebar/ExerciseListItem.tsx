import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
  Box,
  Collapse,
  TextField,
  ListItemIcon,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import _ from "lodash";

import useIsMountedRef from "../../../../hooks/useIsMountedRef";
import { IExercise } from "../../../../interfaces/workout";

interface IExerciseListItemProps {
  selectedExercises: { [id: string]: IExercise };
  setSelectedExercises: Dispatch<SetStateAction<{ [id: string]: IExercise }>>;
  exercise: IExercise;
}

export default function ExerciseListItem(props: IExerciseListItemProps) {
  const isMounted = useIsMountedRef();

  const [collapsed, setCollapsed] = useState(false);
  const [rep, setRep] = useState(props.exercise.rep);
  const [set, setSet] = useState(props.exercise.set);

  const removeSelectedExercise = () =>
    props.setSelectedExercises(
      _.omit(props.selectedExercises, [props.exercise._id])
    );

  const toggleCollapse = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (isMounted.current) {
      props.setSelectedExercises({
        ...props.selectedExercises,
        [props.exercise._id]: { ...props.exercise, set, rep },
      });
    }
  }, [rep, set]);

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <IconButton onClick={removeSelectedExercise}>
            <CloseIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemText
          primary={props.exercise.name}
          onClick={() => setCollapsed(true)}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={toggleCollapse}>
            {collapsed ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={collapsed} unmountOnExit>
        <ListItem button>
          <Box display="flex">
            <Box mr={1}>
              <TextField
                placeholder="Set"
                type="number"
                value={set}
                onChange={(e) => {
                  setSet(parseInt(e.target.value));
                }}
              />
            </Box>
            <Box ml={1}>
              <TextField
                placeholder="Reps"
                type="number"
                value={rep}
                onChange={(e) => {
                  setRep(parseInt(e.target.value));
                }}
              />
            </Box>
          </Box>
        </ListItem>
      </Collapse>
      <Divider variant="fullWidth" />
    </>
  );
}
