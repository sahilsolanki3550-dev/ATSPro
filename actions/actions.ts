'use server'
import { AiResponse } from "@/types/type";
import { GoogleGenAI } from "@google/genai";

export const optimize = async (job_description: string, resume_text: string) => {

    const apiKey= process.env.GEMINI_API_KEY
    if(!apiKey){
        console.log("api key not found")
    }
    const ai = new GoogleGenAI({apiKey})
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
        model: "gemini-3-flash-preview",
        contents: prompt,
    })

    
   
    const text = response.text || ""
    // const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim()
    const cleanedText = text.replace("```json", "").replace("```", "").trim()
    
    // console.log("text", text)
    // console.log("cleanedText" , cleanedText)
    const result = JSON.parse(cleanedText) as AiResponse 
    // const result2 =cleanedText
    
    return result
}



