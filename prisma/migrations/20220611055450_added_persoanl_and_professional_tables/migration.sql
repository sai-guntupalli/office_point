-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mobile_num" BIGINT NOT NULL,
    "personal_email" TEXT NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessionalInfo" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "emp_id" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "department" TEXT,
    "date_of_join" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reports_to" TEXT,

    CONSTRAINT "ProfessionalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_mobile_num_key" ON "PersonalInfo"("mobile_num");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_personal_email_key" ON "PersonalInfo"("personal_email");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalInfo_emp_id_key" ON "ProfessionalInfo"("emp_id");

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfessionalInfo" ADD CONSTRAINT "ProfessionalInfo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
