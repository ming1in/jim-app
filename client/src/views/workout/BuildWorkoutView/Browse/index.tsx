import React, { useState, Dispatch, SetStateAction } from "react";
import { IExercise } from "../../../../interfaces/workout";

import BrowseCategory from "./BrowseCategory";
import BrowseExercises from "./BrowseExercises";

interface IBrowseProps {
  selectedExercises: { [id: string]: IExercise };
  setSelectedExercises: Dispatch<SetStateAction<{ [id: string]: IExercise }>>;
}

export default function Browse(props: IBrowseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const onClickExercise = (exercise: IExercise) => {
    props.setSelectedExercises({
      ...props.selectedExercises,
      [exercise._id]: { ...exercise, set: 4, rep: 12 },
    });
  };

  return (
    <>
      {selectedCategory ? (
        <BrowseExercises
          onClickExercise={onClickExercise}
          handleBack={() => setSelectedCategory(null)}
          category={selectedCategory}
          selectedExercises={props.selectedExercises}
        />
      ) : (
        <BrowseCategory setSelectedCategory={setSelectedCategory} />
      )}
    </>
  );
}
