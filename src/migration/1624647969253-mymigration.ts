import {MigrationInterface, QueryRunner} from "typeorm";

export class mymigration1624647969253 implements MigrationInterface {
    name = 'mymigration1624647969253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "board" ("id" uuid NOT NULL, "columnsCounter" integer NOT NULL, "title" character varying NOT NULL, "userId" text, "columns" json, CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "my_column" ("id" uuid NOT NULL, "title" character varying NOT NULL, "order" integer NOT NULL, CONSTRAINT "PK_6719e23944563b2fb2939dc2d87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL, "title" character varying NOT NULL, "order" integer NOT NULL, "description" character varying NOT NULL, "userId" text, "boardId" text NOT NULL, "columnId" text, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "my_column"`);
        await queryRunner.query(`DROP TABLE "board"`);
    }

}
