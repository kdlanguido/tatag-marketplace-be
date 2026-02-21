/*
  Warnings:

  - You are about to drop the column `batchId` on the `ChapterMember` table. All the data in the column will be lost.
  - You are about to drop the `Batch` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `batchName` to the `ChapterMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pruebaDate` to the `ChapterMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ChapterMember" DROP CONSTRAINT "ChapterMember_batchId_fkey";

-- AlterTable
ALTER TABLE "ChapterMember" DROP COLUMN "batchId",
ADD COLUMN     "batchName" TEXT NOT NULL,
ADD COLUMN     "pruebaDate" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Batch";

-- DropEnum
DROP TYPE "BatchStatus";
