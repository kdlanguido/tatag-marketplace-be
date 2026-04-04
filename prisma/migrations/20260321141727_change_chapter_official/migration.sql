/*
  Warnings:

  - The `position` column on the `ChapterOfficial` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ChapterOfficialPosition" AS ENUM ('PRESIDENT', 'VICE_PRESIDENT', 'CHAPTER_ADMIN', 'SECRETARY', 'TREASURER');

-- CreateEnum
CREATE TYPE "AccessGroup" AS ENUM ('APPLICANT_APPROVER', 'TRAINING_APPROVER', 'PROMOTION_APPROVER');

-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('CREATE', 'UPDATE', 'READ', 'ARCHIVE');

-- AlterTable
ALTER TABLE "ChapterOfficial" DROP COLUMN "position",
ADD COLUMN     "position" "ChapterOfficialPosition" NOT NULL DEFAULT 'CHAPTER_ADMIN';

-- CreateTable
CREATE TABLE "ChapterOfficialAccessGroup" (
    "id" SERIAL NOT NULL,
    "position" "ChapterOfficialPosition" NOT NULL,
    "accessGroup" "AccessGroup" NOT NULL,

    CONSTRAINT "ChapterOfficialAccessGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessGroupPermission" (
    "id" SERIAL NOT NULL,
    "accessGroup" "AccessGroup" NOT NULL,

    CONSTRAINT "AccessGroupPermission_pkey" PRIMARY KEY ("id")
);
