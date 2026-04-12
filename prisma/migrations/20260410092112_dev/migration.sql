-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('WAIVED', 'FOR_APPROVAL', 'APPROVED', 'DECLINED');

-- AlterTable
ALTER TABLE "ChapterMember" ADD COLUMN     "applicationApprovedDate" TIMESTAMP(3),
ADD COLUMN     "applicationApproverId" INTEGER,
ADD COLUMN     "applicationApproverRemarks" TEXT,
ADD COLUMN     "applicationStatus" "ApplicationStatus" DEFAULT 'WAIVED';

-- AddForeignKey
ALTER TABLE "ChapterMember" ADD CONSTRAINT "ChapterMember_applicationApproverId_fkey" FOREIGN KEY ("applicationApproverId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
