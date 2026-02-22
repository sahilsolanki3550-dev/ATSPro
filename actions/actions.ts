'use server'
import { AiResponse } from "@/types/type";
import { GoogleGenAI } from "@google/genai";

export const optimize = async (job_description: string, resume_text: string) => {

    const apiKey= process.env.GEMINI_API_KEY
    if(!apiKey){
        console.log("api key not found")
    }
    const ai = new GoogleGenAI({apiKey})
    // const prompt = `
    //         You are an advanced AI Resume Analyzer.

    //         Your task is to:

    //         1. Compare the provided Job Description and Resume.
    //         2. Extract required skills from the Job Description.
    //         3. Extract skills from the Resume.
    //         4. Calculate a realistic match percentage based on:
    //         - Skill match
    //         - Keyword alignment
    //         - Role relevance
    //         - Experience alignment
    //         5. Identify missing skills.
    //         6. Suggest specific improvements.
    //         7. Provide constructive feedback.

    //         -------------------------------------

    //         Job Description:
    //         ${job_description}

    //         -------------------------------------

    //         Resume:
    //         ${resume_text}

    //         -------------------------------------

    //         Return ONLY valid JSON in this exact format:

    //         {
    //         "match_percentage": number,
    //         "matched_skills": [],
    //         "missing_skills": [],
    //         "improvement_suggestions": [
    //             "Specific actionable suggestion 1",
    //             "Specific actionable suggestion 2"
    //         ],
    //         "overall_feedback": "Detailed professional feedback paragraph"
    //         }

    //         Rules:
    //         - Match percentage must be realistic (0-100).
    //         - Do NOT hallucinate skills not present.
    //         - Keep suggestions specific and practical.
    //         - Keep feedback professional and concise.
    //         - Return strictly valid JSON (no markdown, no explanation).
    //         `;


    // const response = await ai.models.generateContent({
    //     model: "gemini-3-flash-preview",
    //     contents: prompt,
    // })


    const prompt = `You are an enterprise-grade ATS Resume Analyzer used in a production SaaS platform.

Your job is to perform a STRICT, DATA-DRIVEN comparison between the Job Description and the Resume.

You must analyze using deterministic logic.

========================================

SCORING MODEL (Follow strictly):

1) MATCH SCORE (0-100)
   Based on:
   - Required Skill Match (50%)
   - Role Relevance (20%)
   - Experience Alignment (20%)
   - Responsibilities Overlap (10%)

2) KEYWORD MATCH SCORE (0-100)
   % of job description keywords found in resume.

3) ATS FORMATTING SCORE (0-100)
   Penalize for:
   - Missing LinkedIn
   - Missing contact info
   - Use of icons or graphics
   - Poor section headings
   - Missing measurable achievements
   - No skills grouping

4) FINAL ATS SCORE (0-100)
   Formula:
   ATS Score = 
   (Match Score * 0.5) +
   (Keyword Match Score * 0.3) +
   (ATS Formatting Score * 0.2)

========================================

Your Tasks:

1. Extract required skills from Job Description.
2. Extract skills from Resume.
3. Identify matched skills.
4. Identify missing critical skills.
5. Calculate:
   - match_score
   - keyword_match_score
   - ats_formatting_score
   - ats_score
6. Detect ATS critical errors.
7. Provide categorized suggestions:
   - Quantification improvements
   - Skill improvements
   - Formatting improvements
8. Provide a concise AI verdict paragraph.
9. Classify result:
   - "Excellent Match" (85+)
   - "Good Match" (70–84)
   - "Moderate Match" (50–69)
   - "Low Match" (<50)

========================================

Job Description:
${job_description}

========================================

Resume:
${resume_text}

========================================

Return STRICT JSON only (NO markdown, NO explanation):

{
  "match_score": number,
  "keyword_match_score": number,
  "formatting_score": number,
  "ats_score": number,
  "verdict_label": "Excellent Match | Good Match | Average Match | Bad Match",

  "matched_skills": [],
  "missing_keywords": [],

  "keyword_breakdown": {
    "total_keywords_in_jd": number,
    "keywords_found_in_resume": number,
    "keywords_missing": number
  },

  "improvement_suggestions": [
  "Specific actionable suggestion 1",
  "Specific actionable suggestion 2"
],

  "critical_errors": [],

  "verdict_summary": "Professional paragraph summary"
}

Rules:
- Be strict.
- Do not hallucinate.
- Do not inflate scores.
- Same input must always produce same numeric scores.
- All scores must be integers.
- Keep analysis realistic and enterprise-level.
- Return valid JSON only.`;

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



