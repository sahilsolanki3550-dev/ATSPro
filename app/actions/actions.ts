'use server'
import { GoogleGenAI } from "@google/genai";

export async function getSkills() {
    const ai = new GoogleGenAI({});
    const job_description = "ForontEnd developer"

    const prompt = `Extract only professional skills from the following job description.
                  Include:
                  - Programming languages
                  - Frameworks
                  - Tools
                  - Technologies
                  - Relevant soft skills (if clearly mentioned)

                  Do not include responsibilities, education, or experience years.

                  Return only valid JSON in this format:
                  {
                    "skills": []
                  }
                  Job Description: ${job_description}`

        const response = await ai.models.generateContent({
                                model: "gemini-3-flash-preview",
                                contents: prompt,   
    });
    const text = response.text
    if(!text){
        return null
    }
    
    return JSON.parse(text)
    // return skills

}