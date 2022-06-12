/*
  Warnings:

  - You are about to drop the column `address` on the `PersonalInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "address",
ADD COLUMN     "address_id" TEXT;

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "flat_num" TEXT NOT NULL,
    "add_line1" TEXT NOT NULL,
    "add_line2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
