/*
  Warnings:

  - Added the required column `password` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Creator" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT
);
INSERT INTO "new_Creator" ("avatar", "email", "id", "name") SELECT "avatar", "email", "id", "name" FROM "Creator";
DROP TABLE "Creator";
ALTER TABLE "new_Creator" RENAME TO "Creator";
CREATE UNIQUE INDEX "Creator_email_key" ON "Creator"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
