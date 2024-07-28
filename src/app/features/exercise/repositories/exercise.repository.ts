import { ExerciseEntity } from "../../../shared/database/entities/exercise.entity";
import { Database } from '../../../../main/database/database.connection';
import { Exercise } from "../../../models/exercise.models";
import { WorkoutRepository } from "../../workout/repositories/workout.repository";

export class ExerciseRepository{
    private repository = Database.connection.getRepository(ExerciseEntity)

    public async list(){
        const result = await this.repository.find()

        return result.map((entity) => this.mapRowToModel(entity))
    }

    public async get(exerciseId: string){
        const result = await this.repository.findOneBy({
            id: exerciseId
        })

        if(!result) return undefined

        return this.mapRowToModel(result)
    }

    private mapRowToModel(row: ExerciseEntity): Exercise {
        const workout = WorkoutRepository.mapRowToModel(row.workout);
        return Exercise.create(row,workout);
    }
    
}