/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MEMBER', 'ADMIN');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "email" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "founderUserId" INTEGER NOT NULL,

    CONSTRAINT "Chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembershipInformation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "chapterId" INTEGER,

    CONSTRAINT "MembershipInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Chapters_name_key" ON "Chapters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chapters_founderUserId_key" ON "Chapters"("founderUserId");

-- CreateIndex
CREATE UNIQUE INDEX "MembershipInformation_userId_key" ON "MembershipInformation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MembershipInformation_chapterId_key" ON "MembershipInformation"("chapterId");

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_founderUserId_fkey" FOREIGN KEY ("founderUserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipInformation" ADD CONSTRAINT "MembershipInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembershipInformation" ADD CONSTRAINT "MembershipInformation_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
