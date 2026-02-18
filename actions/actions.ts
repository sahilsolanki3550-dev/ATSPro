'use server'
import { AiResponse } from "@/types/type";
import { GoogleGenAI } from "@google/genai";

import pdfToText from 'react-pdftotext';



export const optimize = async (job_description: string, resume_text: string) => {

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY!,
    })
    const prompt = `
            You are an advanced AI Resume Analyzer.

            Your task is to:

            1. Compare the provided Job Description and Resume.
            2. Extract required skills from the Job Description.
            3. Extract skills from the Resume.
            4. Calculate a realistic match percentage based on:
            - Skill match
            - Keyword alignment
            - Role relevance
            - Experience alignment
            5. Identify missing skills.
            6. Suggest specific improvements.
            7. Provide constructive feedback.

            -------------------------------------

            Job Description:
            ${job_description}

            -------------------------------------

            Resume:
            ${resume_text}

            -------------------------------------

            Return ONLY valid JSON in this exact format:

            {
            "match_percentage": number,
            "matched_skills": [],
            "missing_skills": [],
            "improvement_suggestions": [
                "Specific actionable suggestion 1",
                "Specific actionable suggestion 2"
            ],
            "overall_feedback": "Detailed professional feedback paragraph"
            }

            Rules:
            - Match percentage must be realistic (0-100).
            - Do NOT hallucinate skills not present.
            - Keep suggestions specific and practical.
            - Keep feedback professional and concise.
            - Return strictly valid JSON (no markdown, no explanation).
            `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    })

    
   
    const text = response.text ?? ""
    const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim()
   
    const result = JSON.parse(cleanedText) as AiResponse 
    

    // const skills = job_description + "Next.js"
    // return skills
    return result
}



