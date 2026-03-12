/*
  Warnings:

  - You are about to drop the column `isNew` on the `TrainingAdditionalItems` table. All the data in the column will be lost.
  - You are about to drop the column `isUpdated` on the `TrainingAdditionalItems` table. All the data in the column will be lost.
  - You are about to drop the column `isNew` on the `TrainingTemplate` table. All the data in the column will be lost.
  - You are about to drop the column `isUpdated` on the `TrainingTemplate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TrainingAdditionalItems" DROP COLUMN "isNew",
DROP COLUMN "isUpdated";

-- AlterTable
ALTER TABLE "TrainingTemplate" DROP COLUMN "isNew",
DROP COLUMN "isUpdated";
