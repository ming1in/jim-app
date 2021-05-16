import React, { createContext, useState } from "react";
import { useParams } from "react-router";
import useWorkouts from "../hooks/useWorkouts";

interface IWorkoutProviderProps {
  children: React.ReactNode;
}

interface IWorkoutContext {
  workout: any;
  progress: number;
  isResting: boolean;
  addCompletedSet: () => void;
  stopResting: () => void;
  startResting: () => void;
}

export const WorkoutContext = createContext<IWorkoutContext | null>(null);

export default function WorkoutProvider(props: IWorkoutProviderProps) {
  const workouts = useWorkouts();
  const { workoutId } = useParams() as any;
  const { data: workout } = workouts.fetchWorkout(workoutId);

  const [totalCompletedSets, setTotalCompletedSets] = useState(0);
  const [isResting, setIsResting] = useState(false);

  const addCompletedSet = () => setTotalCompletedSets(totalCompletedSets + 1);

  const totalSets = workout[0].exercises.reduce(
    (acc: number, exercise: any) => acc + exercise.set,
    0
  ) as number;

  const progress = Math.round((totalCompletedSets / totalSets) * 100);

  const stopResting = () => setIsResting(false);
  const startResting = () => setIsResting(true);

  return (
    <WorkoutContext.Provider
      value={{
        workout: workout[0],
        progress,
        isResting,
        addCompletedSet,
        stopResting,
        startResting,
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
}
