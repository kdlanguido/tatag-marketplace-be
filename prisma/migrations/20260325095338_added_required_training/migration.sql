-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "isTrainingRequired" BOOLEAN,
ADD COLUMN     "requiredTrainingId" INTEGER;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_requiredTrainingId_fkey" FOREIGN KEY ("requiredTrainingId") REFERENCES "Training"("id") ON DELETE SET NULL ON UPDATE CASCADE;
