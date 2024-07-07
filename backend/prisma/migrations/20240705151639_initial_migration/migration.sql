-- CreateTable
CREATE TABLE "diseases_table" (
    "id" TEXT NOT NULL,
    "common_name" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "disease_about" TEXT NOT NULL,
    "disease_cause" TEXT NOT NULL,
    "disease_treatment" TEXT NOT NULL,

    CONSTRAINT "diseases_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "diseases_table_common_name_scientific_name_key" ON "diseases_table"("common_name", "scientific_name");
