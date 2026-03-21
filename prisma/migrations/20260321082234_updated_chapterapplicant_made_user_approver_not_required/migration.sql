-- DropForeignKey
ALTER TABLE "ChapterApplicant" DROP CONSTRAINT "ChapterApplicant_approverId_fkey";

-- AlterTable
ALTER TABLE "ChapterApplicant" ALTER COLUMN "approverId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ChapterApplicant" ADD CONSTRAINT "ChapterApplicant_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
