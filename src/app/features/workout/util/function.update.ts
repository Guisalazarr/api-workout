import { Workout } from "../../../models/workout.models";
import { UpdateWorkoutParams } from "../usecases/update-workout.usecase";


export function editWorkout(
    params: UpdateWorkoutParams, workout: Workout
){
    if(params.name){
        workout.name = params.name
    }

    if(params.repetitions){
        workout.repetitions = params.repetitions
    }

    if(params.series){
        workout.series = params.series
    }

    if(params.weeks){
        workout.weeks = params.weeks
    }

    if(params.cardio){
        workout.cardio = params.cardio
    }

    if(params.description){
        workout.description = params.description
    }

    return workout
}