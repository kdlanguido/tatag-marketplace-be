-- CreateEnum
CREATE TYPE "ApplicantStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED');

-- CreateTable
CREATE TABLE "ChapterApplicant" (
    "id" SERIAL NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "approverId" INTEGER NOT NULL,
    "applicantId" INTEGER NOT NULL,
    "appliedDate" TIMESTAMP(3) NOT NULL,
    "dateApproved" TIMESTAMP(3) NOT NULL,
    "status" "ApplicantStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "ChapterApplicant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChapterApplicant" ADD CONSTRAINT "ChapterApplicant_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChapterApplicant" ADD CONSTRAINT "ChapterApplicant_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChapterApplicant" ADD CONSTRAINT "ChapterApplicant_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
