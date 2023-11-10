-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "telegram_tag" TEXT NOT NULL,
    "directionID" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Homework" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Homework_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" SERIAL NOT NULL,
    "telegram_tag" TEXT NOT NULL,
    "directionId" INTEGER NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lector" (
    "id" SERIAL NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "directionId" INTEGER NOT NULL,

    CONSTRAINT "Lector_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Direction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Direction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submitted_work" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "studentId" INTEGER NOT NULL,
    "homeworkId" INTEGER NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "mark" INTEGER NOT NULL,

    CONSTRAINT "Submitted_work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Homework_Direction" (
    "id" SERIAL NOT NULL,
    "homeworkId" INTEGER NOT NULL,
    "directionId" INTEGER NOT NULL,

    CONSTRAINT "Homework_Direction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_telegram_tag_key" ON "Student"("telegram_tag");

-- CreateIndex
CREATE UNIQUE INDEX "Mentor_telegram_tag_key" ON "Mentor"("telegram_tag");

-- CreateIndex
CREATE UNIQUE INDEX "Lector_mentorId_key" ON "Lector"("mentorId");

-- CreateIndex
CREATE UNIQUE INDEX "Lector_directionId_key" ON "Lector"("directionId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_directionID_fkey" FOREIGN KEY ("directionID") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lector" ADD CONSTRAINT "Lector_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lector" ADD CONSTRAINT "Lector_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submitted_work" ADD CONSTRAINT "Submitted_work_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submitted_work" ADD CONSTRAINT "Submitted_work_homeworkId_fkey" FOREIGN KEY ("homeworkId") REFERENCES "Homework"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submitted_work" ADD CONSTRAINT "Submitted_work_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Homework_Direction" ADD CONSTRAINT "Homework_Direction_homeworkId_fkey" FOREIGN KEY ("homeworkId") REFERENCES "Homework"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Homework_Direction" ADD CONSTRAINT "Homework_Direction_directionId_fkey" FOREIGN KEY ("directionId") REFERENCES "Direction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
