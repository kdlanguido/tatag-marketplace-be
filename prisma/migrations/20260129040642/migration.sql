/*
  Warnings:

  - Made the column `userId` on table `MembershipInformation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "MembershipInformation" DROP CONSTRAINT "MembershipInformation_userId_fkey";

-- DropIndex
DROP INDEX "MembershipInformation_chapterId_key";

-- AlterTable
ALTER TABLE "MembershipInformation" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "MembershipInformation" ADD CONSTRAINT "MembershipInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
