import { v4 as createId } from 'uuid';
import { User } from './user.models';
export class Workout {
    private _id: string;

    constructor(
        private _name: string,
        private _user: User,
        private _repetitions?: number,
        private _series?: number,
        private _weeks?: number,
        private _cardio?: string,
        private _descrioption?: string,

    ) {
        this._id = createId();
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
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
 
    public get user() {
        return this._user;
    }
    public get cardio() {
        return this._cardio;
    }

    public get periodization() {
        return this._descrioption;
    }

    public toJson() {
        return {
            id: this._id,
            name: this._name,
            repetitions: this._repetitions,
            series: this._series,
            weeks: this._weeks,
            user: this._user,
            cardio: this._cardio,
            descrioption: this._descrioption
        };
    }

}
