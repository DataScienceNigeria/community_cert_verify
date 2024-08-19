"use server";
import csvtojson from "csvtojson";
import { StudentsData } from "@/types/students";
import { prisma } from "@/db/client";

// CSV column headers
const csvHeaders = {
    "Name": "name",
    "Name of Certification": "certificationName",
    "Certificate ID": "certificateID",
    "Certificate Link": "link",
    "Student ID": "studentID",
    "Issued Date": "issuedDate",
    "Issued By": "issuedBy",
    "Email": "email"
};

// Function to map CSV columns to Prisma fields with stripping
const mapCsvToPrisma = (csvRow: any) => {
    const mappedRow: any = {};
    for (const [csvHeader, prismaField] of Object.entries(csvHeaders)) {
        const value = csvRow[csvHeader] || ""; // Default to an empty string if the field is missing
        mappedRow[prismaField] = value.trim(); // Strip leading and trailing spaces
    }
    return mappedRow;
};

export const uploadCertificatesCSV = async (formdata: FormData) => {
    const file = formdata.get("certificates") as File;
    if (file) {
        try {
            const text = await file.text();
            const jsonArray = await csvtojson().fromString(text);

            // Check if the headers match the expected headers
            const headers = Object.keys(jsonArray[0]);
            const expectedHeaders = Object.keys(csvHeaders);
            const missingHeaders = expectedHeaders.filter(header => !headers.includes(header));
            if (missingHeaders.length > 0) {
                throw new Error(`Missing headers: ${missingHeaders.join(", ")}`);
            }

            // Map CSV columns to Prisma fields
            const jsonObj: StudentsData[] = jsonArray.map(mapCsvToPrisma);

            const countCertificates = await prisma.student_Certificate.createMany({
                data: jsonObj
            });

            return countCertificates.count;
        } catch (error) {
            console.error("Error processing file:", error);
            return null;
        }
    } else {
        console.error("Invalid file");
        return null;
    }
};
