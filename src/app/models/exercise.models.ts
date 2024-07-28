import { v4 as createId } from 'uuid';
import { Workout } from './workout.models';
import { ExerciseEntity } from '../shared/database/entities/exercise.entity';
export class Exercise {
    private _id: string;
    private _weight: number

    constructor(
        private _name: string,
        private _workout: Workout,
        
    ) {
        this._id = createId();
        this._weight = 0
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get weight() {
        return this._weight;
    }
 
    public get workout() {
        return this._workout;
    }
    public toJson() {
        return {
            id: this._id,
            name: this._name,
            weight: this._weight
        };
    }

    public static create(row: ExerciseEntity, workout: Workout) {
        const exercise = new Exercise(row.name, workout);
        exercise._id = row.id;

        return exercise;
    }

}
