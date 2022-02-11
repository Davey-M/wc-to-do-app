-- Database name should be todo-app

CREATE TABLE "notes" (
    "id" SERIAL PRIMARY KEY,
    "text" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "container" VARCHAR(255)
);

INSERT INTO "notes" ("text", "completed", "container")
VALUES 
    ('Sample Note', false, '1'),
    ('Another Sample', true, '1');