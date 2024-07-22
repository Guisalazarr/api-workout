import { Database } from '../../../../main/database/database.connection';
import { Workout } from '../../../models/workout.models';
import { WorkoutEntity } from '../../../shared/database/entities/workout.entity';
import { UserRepository } from '../../user/repositories/user.repository';

export class WorkoutRepository {
    private repository = Database.connection.getRepository(WorkoutEntity);

    public async list() {
        const result = await this.repository.find();

        return result.map((entity) => WorkoutRepository.mapRowToModel(entity));
    }

    public async create (workout: Workout){
        const workoutEntity = this.repository.create({
            id: workout.id,
            name: workout.name,
            repetitions: workout.repetitions,
            series: workout.series,
            weeks: workout.weeks,
            cardio: workout.cardio,
            description: workout.description,
            idUser: workout.user.id

        })

        await this.repository.save(workoutEntity)
    }


    public static mapRowToModel(row: WorkoutEntity): Workout {
        const user = UserRepository.mapRowToModel(row.user);
        return Workout.create(row,user);
    }

}
