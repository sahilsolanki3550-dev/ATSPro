'use server'
import { GoogleGenAI } from "@google/genai";
// import { PDFParse } from 'pdf-parse';
import pdfToText from 'react-pdftotext';

export const optimize = async (job_description: string, resume_text:string) => {

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY!,
    }) 
     const prompt = `Extract only professional skills from the following job description.
                  Include:
                  - Programming languages
                  - Frameworks
                  - Tools
                  - Technologies

                  Do not include responsibilities, education, or experience years.

                  Job Description: ${job_description}
                  Resume: ${resume_text}`

    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    })

    // const skills = job_description + "Next.js"
    // return skills
    return response.text
}



