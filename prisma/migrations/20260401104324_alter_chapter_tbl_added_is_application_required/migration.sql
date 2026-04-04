-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "isApplicationRequired" BOOLEAN DEFAULT false,
ALTER COLUMN "isTrainingRequired" SET DEFAULT false;
