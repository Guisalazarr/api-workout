import { v4 as createId } from 'uuid';
import { User } from './user.models';
import { WorkoutEntity } from '../shared/database/entities/workout.entity';
export class Workout {
    private _id: string;

    constructor(
        private _name: string,
        private _user: User,
        private _repetitions?: number,
        private _series?: number,
        private _weeks?: number,
        private _cardio?: string,
        private _description?: string,

    ) {
        this._id = createId();
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get user() {
        return this._user;
    }

    public get repetitions() {
        return this._repetitions;
    }

    public get series() {
        return this._series;
    }

    public get weeks() {
        return this._weeks;
    }

    public get cardio() {
        return this._cardio;
    }

    public get description() {
        return this._description;
    }

    public set name(name: string){
        this._name = name
    }

    public set repetitions(repetitions: number | undefined){
        this._repetitions = repetitions
    }

    public set series(series: number | undefined){
        this._series = series
    }

    public set weeks(weeks: number | undefined){
        this._weeks = weeks
    }

    public set cardio(cardio: string | undefined){
        this._cardio = cardio
    }

    public set description(description: string | undefined){
        this._description = description
    }

    public toJson() {
        return {
            id: this._id,
            name: this._name,
            repetitions: this._repetitions,
            series: this._series,
            weeks: this._weeks,
            cardio: this._cardio,
            description: this._description
        };
    }

    public static create(row: WorkoutEntity, user: User) {
        const workout = new Workout(row.name, user, row.repetitions, row.series, row.weeks, row.cardio, row.description);
        workout._id = row.id;

        return workout;
    }

}
