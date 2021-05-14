import React, { useState } from 'react';

import { Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core'
import { useQuery } from 'react-query';
import axios from 'axios';

import includes from 'lodash/includes'

import { EApi } from '../../enums/api'
 
const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      padding: '1rem'
    },
    muscleGroupButton: {
      color: 'white',
      backgroundColor: theme.palette.secondary.main,
      margin: '0 1rem',
      flex: '0 0 auto',
    },
    muscleGroupButtonContainer: {
      display: 'flex',
      maxWidth: '100%',
      overflowX: 'auto',
      padding: '1rem',
    },
    header: {
      display: "flex",
      flexDirection: "column",
      padding: '1rem',
      alignItems: "center",
      background: theme.palette.primary.main,
      color: 'white',
      flexShrink: 0,
    },
    excercisesContainer: {
      flex: 1,
      maxHeight: '500px',
      overflowY: 'auto',
    }
  })
);

const MUSCLE_GROUPS = ['abdominals', 'abductors', 'adductors','biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower back', 'middle back', 'neck', 'quadriceps', 'shoulders', 'stationary', 'traps', 'treadmill', 'triceps']

interface Excercise {
  _id: string
  name: string
  category: string
}

async function fetchExcercises(muscleGroup: string): Promise<Excercise[]> {
  const data = await axios.get(EApi.GET_EXERCISES, {
    params: {
      group: muscleGroup
    }
  })

  const excercises = data.data as Excercise[]
  return excercises
}

function useFetchExcercies(muscleGroup?: string) {
  console.log(muscleGroup)
  return useQuery(['fetchExcercies', muscleGroup], () => fetchExcercises(muscleGroup!), {
    enabled: muscleGroup !== undefined
  })
}



function WorkoutView() {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState<string | undefined>(undefined)
  const [selectedExcercises, setSelectedExcercises] = useState<Excercise[]>([])
  
  const { data: excercises } = useFetchExcercies(selectedMuscleGroup)

  const classes = useStyles()

  const handleMuscleGroupClick = (muscleGroup: string) => {
    setSelectedMuscleGroup(muscleGroup)
  }

  const handleAddToWorkout = (excercise: Excercise) => {
    if (isExcerciseSelected(excercise)) {
      const newExcercises = selectedExcercises.filter(x => x._id !== excercise._id)
      setSelectedExcercises(newExcercises)
    } else {
      setSelectedExcercises([...selectedExcercises, excercise])
    }
    console.log(selectedExcercises)
  }

  const isExcerciseSelected = (excersice: Excercise) => {
    const ids = selectedExcercises.map(x => x._id)
    return includes(ids, excersice._id)
  }

  return (
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Find Excerices</h1>
          <div className={classes.muscleGroupButtonContainer}>
            {
              MUSCLE_GROUPS.map(muscleGroup => (
                <Button className={classes.muscleGroupButton} onClick={() => handleMuscleGroupClick(muscleGroup)} key={muscleGroup}>
                  {muscleGroup}
                </Button>
              ))
            }
          </div>
          <div className={classes.muscleGroupButtonContainer}>
           {
              selectedExcercises.map(x => (
                <Button className={classes.muscleGroupButton} onClick={() => handleAddToWorkout(x)} key={x._id}>
                  {x.name}
                </Button>
              ))
            }
          </div>
        </div>
        <div className={classes.excercisesContainer}>
          {
            excercises?.map(exercise => (
              <div key={exercise._id}>
                <p>{exercise.name}</p>
                <button onClick={() => handleAddToWorkout(exercise)}>
                  {isExcerciseSelected(exercise) ? 'Remove workout' : 'Add to workout'}
                </button>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default WorkoutView;
