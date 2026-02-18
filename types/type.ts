export interface AiResponse{
    match_percentage: number;
    matched_skills: string[];
    missing_skills: string[];
    improvement_suggestions: string[];
    overall_feedback: string;
}
