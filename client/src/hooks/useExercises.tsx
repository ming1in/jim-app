/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useQuery } from "react-query";

import { EApi } from "../enums/api";

interface Exercise {
  _id: string;
  name: string;
  category: string;
}

export default function userExercises() {

  const fetchExercises = async (muscleGroup: string): Promise<Exercise[]> => {
    const data = await axios.get(EApi.GET_EXERCISES, {
      params: {
        group: muscleGroup,
      },
    });

    const exercises = data.data as Exercise[];
    return exercises;
  };

  const fetchAll = (muscleGroup?: string) => {
    return useQuery(
      ["fetchExcercies", muscleGroup],
      () => fetchExercises(muscleGroup!),
      {
        enabled: muscleGroup !== undefined,
      }
    );
  };

  return { fetchAll };
}
