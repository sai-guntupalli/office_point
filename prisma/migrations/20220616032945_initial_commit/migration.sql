-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "professional_profile_id" TEXT,
    "personal_profile_id" TEXT,
    "address_id" TEXT
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PersonalProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "date_of_birth" TEXT,
    "personal_mobile" TEXT,
    "personal_email" TEXT,
    "editable" BOOLEAN NOT NULL DEFAULT true,
    "about" TEXT,
    CONSTRAINT "PersonalProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProfessionalProfile" (
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
    "date_of_join" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "WorkLocation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dept" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "project_name" TEXT NOT NULL,
    "client_name" TEXT,
    "department" TEXT,
    "manager" TEXT,
    CONSTRAINT "Project_department_fkey" FOREIGN KEY ("department") REFERENCES "Department" ("dept") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Project_client_name_fkey" FOREIGN KEY ("client_name") REFERENCES "Client" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Designation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "designation" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "door_num" TEXT NOT NULL,
    "add_line1" TEXT NOT NULL,
    "add_line2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    CONSTRAINT "Address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_professional_profile_id_key" ON "User"("professional_profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_personal_profile_id_key" ON "User"("personal_profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_id_key" ON "User"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalProfile_user_id_key" ON "PersonalProfile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalProfile_personal_mobile_key" ON "PersonalProfile"("personal_mobile");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalProfile_personal_email_key" ON "PersonalProfile"("personal_email");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalProfile_user_id_key" ON "ProfessionalProfile"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalProfile_emp_id_key" ON "ProfessionalProfile"("emp_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalProfile_email_key" ON "ProfessionalProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProfessionalProfile_mobile_key" ON "ProfessionalProfile"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "WorkLocation_location_key" ON "WorkLocation"("location");

-- CreateIndex
CREATE UNIQUE INDEX "Department_dept_key" ON "Department"("dept");

-- CreateIndex
CREATE UNIQUE INDEX "Project_project_name_key" ON "Project"("project_name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Designation_designation_key" ON "Designation"("designation");

-- CreateIndex
CREATE UNIQUE INDEX "Address_user_id_key" ON "Address"("user_id");
