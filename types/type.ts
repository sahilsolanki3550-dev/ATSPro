// export interface AiResponse{
//     match_percentage: number;
//     matched_skills: string[];
//     missing_skills: string[];
//     improvement_suggestions: string[];
//     overall_feedback: string;
// }

export interface AiResponse {
  match_score: number;
  keyword_match_score: number;
  formatting_score: number;
  ats_score: number;

  verdict_label: string;

  matched_skills: string[];
  missing_keywords: string[];

  keyword_breakdown: {
    total_keywords_in_jd: number;
    keywords_found_in_resume: number;
    keywords_missing: number;
  };

improvement_suggestions: string[];


  critical_errors: string[];

  verdict_summary: string;
}