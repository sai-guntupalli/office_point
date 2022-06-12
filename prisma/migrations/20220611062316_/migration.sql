/*
  Warnings:

  - A unique constraint covering the columns `[mobile_num]` on the table `ProfessionalInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email_id]` on the table `ProfessionalInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email_id` to the `ProfessionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile_num` to the `ProfessionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project` to the `ProfessionalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `work_location` to the `ProfessionalInfo` table without a default value. This is not possible if the table is not empty.
  - Made the column `department` on table `ProfessionalInfo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reports_to` on table `ProfessionalInfo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProfessionalInfo" ADD COLUMN     "email_id" TEXT NOT NULL,
ADD COLUMN     "mobile_num" BIGINT NOT NULL,
ADD COLUMN     "project" TEXT NOT NULL,
ADD COLUMN     "work_location" TEXT NOT NULL,
ALTER COLUMN "department" SET NOT NULL,
ALTER COLUMN "reports_to" SET NOT NULL;

-- CreateTable
CREATE TABLE "WorkLocation" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "WorkLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "dept" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "project_name" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkLocation_location_key" ON "WorkLocation"("location");

-- CreateIndex
CREATE UNIQUE INDEX "Department_dept_key" ON "Department"("dept");

-- CreateIndex
CREATE UNIQUE INDEX "Project_project_name_key" ON "Project"("project_name");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalInfo_mobile_num_key" ON "ProfessionalInfo"("mobile_num");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalInfo_email_id_key" ON "ProfessionalInfo"("email_id");

-- AddForeignKey
ALTER TABLE "ProfessionalInfo" ADD CONSTRAINT "ProfessionalInfo_work_location_fkey" FOREIGN KEY ("work_location") REFERENCES "WorkLocation"("location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessionalInfo" ADD CONSTRAINT "ProfessionalInfo_department_fkey" FOREIGN KEY ("department") REFERENCES "Department"("dept") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessionalInfo" ADD CONSTRAINT "ProfessionalInfo_project_fkey" FOREIGN KEY ("project") REFERENCES "Project"("project_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_department_fkey" FOREIGN KEY ("department") REFERENCES "Department"("dept") ON DELETE RESTRICT ON UPDATE CASCADE;
