/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";

import axios from "axios";
import { useMutation, useQuery } from "react-query";

import { AuthContext } from "../context/AuthProvider";
import { EApi } from "../enums/api";
import { useHistory } from "react-router";
import { ERoute } from "../enums/route";

export default function useWorkouts() {
  const history = useHistory()
  const auth = useContext(AuthContext);


  const fetchWorkoutByid = async (workoutId: string): Promise<any> => {
    const data = await axios.get(EApi.GET_WORKOUT + workoutId);

    const exercises = data.data 
    return exercises;
  };

    const fetchWorkout = (workoutId?: string) => {
      return useQuery(
        ["fetchWorkout", workoutId],
        () => fetchWorkoutByid(workoutId!),
        {
          enabled: workoutId !== undefined,
        }
      );
    };

  const add = useMutation(
    (exercises: any) =>
      axios.post(EApi.ADD_WORKOUT, {
        currentUser: auth?.currentUser,
        exercises,
      }),
    {
      onSuccess: ({ data }) => {
        history.push(`${ERoute.WORKOUT}/${data._id}`)
      },
    }
  );

  return { add, fetchWorkout };
}
