import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1684411381728 implements MigrationInterface {
    name = 'createTables1684411381728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "qchat"."group_details" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "version" integer NOT NULL,
                "created_by" character varying(300),
                "updated_by" character varying(300),
                "conversation_id" character varying NOT NULL,
                "name" TIMESTAMP NOT NULL,
                "group_pic" TIMESTAMP,
                "admins" text array NOT NULL DEFAULT '{}',
                CONSTRAINT "PK_e87769fa6b998e5e777acb09b05" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "qchat"."message" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "version" integer NOT NULL,
                "created_by" character varying(300),
                "updated_by" character varying(300),
                "author_id" character varying NOT NULL,
                "content" character varying NOT NULL,
                "conversation_id" character varying NOT NULL,
                CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "qchat"."conversation" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "version" integer NOT NULL,
                "created_by" character varying(300),
                "updated_by" character varying(300),
                "participants" text array NOT NULL DEFAULT '{}',
                "joined_at" TIMESTAMP NOT NULL,
                "left_at" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_864528ec4274360a40f66c29845" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "qchat"."user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "version" integer NOT NULL,
                "created_by" character varying(300),
                "updated_by" character varying(300),
                "name" character varying NOT NULL,
                "username" character varying NOT NULL,
                "password" character varying NOT NULL,
                "profile_pic_url" character varying,
                "friends" text array NOT NULL DEFAULT '{}',
                CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "qchat"."friendship_status" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "version" integer NOT NULL,
                "created_by" character varying(300),
                "updated_by" character varying(300),
                "requester_id" character varying NOT NULL,
                "addressee_id" TIMESTAMP NOT NULL,
                "is_accepted" boolean NOT NULL DEFAULT false,
                "is_deleted" boolean NOT NULL,
                CONSTRAINT "PK_85e94967e7f716d6f672c265f87" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "qchat"."friendship_status"
        `);
        await queryRunner.query(`
            DROP TABLE "qchat"."user"
        `);
        await queryRunner.query(`
            DROP TABLE "qchat"."conversation"
        `);
        await queryRunner.query(`
            DROP TABLE "qchat"."message"
        `);
        await queryRunner.query(`
            DROP TABLE "qchat"."group_details"
        `);
    }

}
