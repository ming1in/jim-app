import React, { useState, Dispatch, SetStateAction } from "react";

import BrowseCategory from "./BrowseCategory";
import BrowseExercises from "./BrowseExercises";

interface IBrowseProps {
  selectedExercises: any[];
  setSelectedExercises: Dispatch<SetStateAction<any[]>>;
}

export default function Browse(props: IBrowseProps) {
  const [selectedCategory, setSelectedCategory] = useState<any>(undefined);

  const onClickExercise = (exercise: any) => {
    if (props.selectedExercises.includes(exercise)) {
      const newExcercises = props.selectedExercises.filter(
        (x) => x._id !== exercise._id
      );
      props.setSelectedExercises(newExcercises);
    } else {
      props.setSelectedExercises([...props.selectedExercises, exercise]);
    }
  };

  return (
    <>
      {selectedCategory ? (
        <BrowseExercises
          onClickExercise={onClickExercise}
          handleBack={() => setSelectedCategory(undefined)}
          category={selectedCategory}
          selectedExercises={props.selectedExercises}
        />
      ) : (
        <BrowseCategory setSelectedCategory={setSelectedCategory} />
      )}
    </>
  );
}
