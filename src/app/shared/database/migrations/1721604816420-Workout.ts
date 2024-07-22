import { MigrationInterface, QueryRunner } from "typeorm";

export class Workout1721604816420 implements MigrationInterface {
    name = 'Workout1721604816420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workout" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "repetitions" integer NOT NULL, "series" integer NOT NULL, "weeks" integer NOT NULL, "cardio" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_user" uuid NOT NULL, CONSTRAINT "PK_ea37ec052825688082b19f0d939" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "workout" ADD CONSTRAINT "FK_1e146e70b254cee215b1ed546ec" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workout" DROP CONSTRAINT "FK_1e146e70b254cee215b1ed546ec"`);
        await queryRunner.query(`DROP TABLE "workout"`);
    }

}
