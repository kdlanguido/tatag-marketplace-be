-- AlterTable
ALTER TABLE "TrainingAdditionalItems" ADD COLUMN     "isNew" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isUpdated" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "TrainingTemplate" ADD COLUMN     "isNew" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isUpdated" BOOLEAN NOT NULL DEFAULT false;
