-- AlterTable
ALTER TABLE "ProfessionalInfo" ALTER COLUMN "leaves_per_month" SET DEFAULT 2,
ALTER COLUMN "notice_period" SET DEFAULT 3;

-- CreateTable
CREATE TABLE "Designation" (
    "id" TEXT NOT NULL,
    "desination" TEXT NOT NULL,

    CONSTRAINT "Designation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Designation_desination_key" ON "Designation"("desination");

-- AddForeignKey
ALTER TABLE "ProfessionalInfo" ADD CONSTRAINT "ProfessionalInfo_designation_fkey" FOREIGN KEY ("designation") REFERENCES "Designation"("desination") ON DELETE RESTRICT ON UPDATE CASCADE;
