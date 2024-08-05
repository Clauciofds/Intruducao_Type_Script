create database finances;

CREATE TABLE "users" (
  "id" serial NOT NULL,
  "name" text NOT NULL,
  "emial" varchar(255) NOT NULL,
  "cpf" char(14),
  "password" text NOT NULL,
  "created_at" time NOT NULL DEFAULT now(),
  PRIMARY KEY ("id"),
  CONSTRAINT "email_unique_constraints" UNIQUE ("emial"),
  CONSTRAINT "cpf_unique_constraints" UNIQUE ("cpf")
)
;

CREATE TABLE "orders" (
  "id" serial NOT NULL,
  "type" char(7) NOT NULL,
  "value" int4 NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT now(),
  "user_id" int4 NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "fk_orders_users_1" FOREIGN KEY ("user_id") REFERENCES "users" ("id")
)
;