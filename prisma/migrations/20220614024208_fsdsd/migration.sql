-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "professional_profile_id" TEXT,
    "personal_profile_id" TEXT
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name", "personal_profile_id", "professional_profile_id") SELECT "email", "emailVerified", "id", "image", "name", "personal_profile_id", "professional_profile_id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_professional_profile_id_key" ON "User"("professional_profile_id");
CREATE UNIQUE INDEX "User_personal_profile_id_key" ON "User"("personal_profile_id");
CREATE TABLE "new_ProfessionalProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT,
    "emp_id" TEXT,
    "role" TEXT,
    "job_type" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "manager" TEXT,
    "notice_period" INTEGER DEFAULT 3,
    "leaves_per_month" REAL DEFAULT 2,
    "editable" BOOLEAN NOT NULL DEFAULT true,
    "last_updated_at" DATETIME NOT NULL,
    "department_id" TEXT,
    "project_id" TEXT,
    "designation_id" TEXT,
    "workLocation_id" TEXT,
    CONSTRAINT "ProfessionalProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProfessionalProfile_workLocation_id_fkey" FOREIGN KEY ("workLocation_id") REFERENCES "WorkLocation" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProfessionalProfile_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProfessionalProfile_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProfessionalProfile_designation_id_fkey" FOREIGN KEY ("designation_id") REFERENCES "Designation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProfessionalProfile" ("department_id", "designation_id", "editable", "email", "emp_id", "id", "job_type", "last_updated_at", "leaves_per_month", "manager", "mobile", "notice_period", "project_id", "role", "user_id", "workLocation_id") SELECT "department_id", "designation_id", "editable", "email", "emp_id", "id", "job_type", "last_updated_at", "leaves_per_month", "manager", "mobile", "notice_period", "project_id", "role", "user_id", "workLocation_id" FROM "ProfessionalProfile";
DROP TABLE "ProfessionalProfile";
ALTER TABLE "new_ProfessionalProfile" RENAME TO "ProfessionalProfile";
CREATE UNIQUE INDEX "ProfessionalProfile_user_id_key" ON "ProfessionalProfile"("user_id");
CREATE UNIQUE INDEX "ProfessionalProfile_emp_id_key" ON "ProfessionalProfile"("emp_id");
CREATE UNIQUE INDEX "ProfessionalProfile_email_key" ON "ProfessionalProfile"("email");
CREATE UNIQUE INDEX "ProfessionalProfile_mobile_key" ON "ProfessionalProfile"("mobile");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
