/*
  Warnings:

  - Added the required column `client_name` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfessionalInfo" ADD COLUMN     "leaves_per_month" DOUBLE PRECISION,
ADD COLUMN     "notice_period" INTEGER;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "client_name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_client_name_fkey" FOREIGN KEY ("client_name") REFERENCES "Client"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
