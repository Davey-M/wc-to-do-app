-- Database name should be todo-app

CREATE TABLE "notes" (
    "id" SERIAL PRIMARY KEY,
    "text" VARCHAR(255) NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "position" INTEGER NOT NULL,
    "container" INTEGER
);

INSERT INTO "notes" ("text", "completed", "container")
VALUES 
    ('Sample Note', false, 1),
    ('Another Sample', true, 1),
    ('A third sample note.', false, 2);

-- container database

CREATE TABLE "containers" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "position" INTEGER NOT NULL
);

INSERT INTO "containers" ("name", "position")
VALUES
    ('First Test Container', 1),
    ('Second Test Container', 2);