import { v4 as createId } from 'uuid';
import { Workout } from './workout.models';
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
            weight: this._weight,
            workout: this._workout,     
        };
    }

}
