-- CreateTable
CREATE TABLE "TrainingAdditionalItems" (
    "id" SERIAL NOT NULL,
    "templateId" INTEGER NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "orderNo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingAdditionalItems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingAdditionalItems" ADD CONSTRAINT "TrainingAdditionalItems_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "TrainingTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
