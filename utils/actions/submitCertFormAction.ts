"use server";
import { StudentCertificateDetails } from "@/types/students";
import { redirect } from 'next/navigation';
import { studentQuery } from "@/utils/queries/students/studentQuery";

export const HandleGetStudentsCertificateForm = async (
    certificateId: string, 
    email: string
): Promise<StudentCertificateDetails> => {

    // Strip leading and trailing spaces
    const trimmedCertificateId = certificateId.trim();
    const trimmedEmail = email.trim();

    const data = {
        certificateId: trimmedCertificateId,
        email: trimmedEmail,
    };

    const result = await studentQuery(data);
    console.log(result);
    
    if (result) {
        redirect(`/students/${result?.certificateID}/${result?.email}/${result?.name}`);
    } else {
        redirect(`/no_record`);
    }
}
