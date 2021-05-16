/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";

import axios from "axios";
import { useMutation, useQuery } from "react-query";

import { AuthContext } from "../context/AuthProvider";
import { EApi } from "../enums/api";
import { useHistory } from "react-router";
import { ERoute } from "../enums/route";

export default function useWorkouts() {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const fetchWorkoutById = async (workoutId: string): Promise<any> => {
    const data = await axios.get(EApi.GET_WORKOUT + workoutId);

    const exercises = data.data;
    return exercises;
  };

  const fetchAllWorkouts = async (): Promise<any> => {
    const data = await axios.get(EApi.ALL_WORKOUTS + auth?.currentUser?._id);

    const exercises = data.data;
    return exercises;
  };

  const fetchWorkout = (workoutId?: string) => {
    return useQuery(
      ["fetchWorkout", workoutId],
      () => fetchWorkoutById(workoutId!),
      {
        enabled: workoutId !== undefined,
      }
    );
  };

  const fetchAll = () => {
    return useQuery(["fetchAlWorkouts"], () => fetchAllWorkouts(), {
      enabled: auth?.currentUser !== undefined,
    });
  };

  const add = useMutation(
    (exercises: any) =>
      axios.post(EApi.ADD_WORKOUT, {
        currentUser: auth?.currentUser,
        ...exercises,
      }),
    {
      onSuccess: ({ data }) => {
        history.push(`${ERoute.WORKOUT}/${data._id}`);
      },
    }
  );

  const complete = useMutation(
    (workoutId: string) => axios.post(EApi.COMPLETE_WORKOUT + workoutId),
    {
      onSuccess: () => {
        history.push(ERoute.PROFILE);
      },
    }
  );

  const generate = useMutation(
    (category: string) =>
      axios.post(EApi.GEN_WORKOUT, {
        category,
        currentUser: auth?.currentUser,
      }),
    {
      onSuccess: ({ data }) => {
        history.push(`${ERoute.WORKOUT}/${data._id}`);
      },
    }
  );

  return { add, complete, generate, fetchWorkout, fetchAll };
}
