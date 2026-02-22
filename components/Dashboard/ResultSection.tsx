import { AiResponse } from '@/types/type'

interface ResultProp{
    result:AiResponse
}




const ResultSection:React.FC<ResultProp> = ( {result}) => {

  
  return (
   <section className='space-y-8 transition-all duration-300 my-15  '>
        {/* Top */}
        <div className='bg-secondary grid grid-cols-1 md:grid-cols-12 gap-8 px-5    md:px-8 py-4 rounded-4xl border border-gray-800 items-center'>
            <div className='md:col-span-4 flex flex-row md:flex-col lg:flex-row gap-5 md:gap-10 justify-center items-center'>
                {/* Match Score */}
                 <div className={`h-35 w-35 md:h-43 md:w-43  flex items-center justify-center rounded-full shadow-lg`} style={{
                                background: `conic-gradient(#3c3cf6  0% ${result.match_score}%, #1f1f35 ${result.match_score}% 100%)`  }}>
                        <div className={`h-29 w-29 md:h-35 md:w-35 bg-secondary  flex flex-col gap-1 items-center justify-center text-4xl   rounded-full h1`}>
                                {result.match_score}%
                                <span className='text-gray-500 uppercase text-[9px] font-bold'>Match Score</span>
                        </div>       
                </div>

                {/*ATS Score  */}
               
                 <div className={`h-35 w-35 md:h-43 md:w-43  flex items-center justify-center rounded-full shadow-lg`} style={{
                                background: `conic-gradient(#3c3cf6  0% ${result.ats_score}%, #1f1f35 ${result.ats_score}% 100%)`  }}>
                        <div className={`h-29 w-29 md:h-35 md:w-35 bg-secondary  flex flex-col gap-1 items-center justify-center text-4xl   rounded-full h1`}>
                                {result.ats_score}%
                                <span className='text-gray-500 uppercase text-[9px] font-bold'>ATS Score</span>
                        </div>       
                </div>
            </div>
            {/* Ai Verdict */}
            <div className='space-y-2 md:col-span-8'>
                <div className='flex justify-between items-center'>   
                    <h3 className='text-white font-semibold text-2xl'>AI Verdict</h3>
                    <h3 className={`rounded-full px-4 py-2 border
                                    ${result.verdict_label === "Bad Match"
                                    ? "text-red-500 bg-red-100"
                                    : result.verdict_label === "Average Match"
                                    ? "text-yellow-600 bg-yellow-100"
                                    : result.verdict_label === "Good Match"
                                    ? "text-green-500  bg-green-950 border-[#F8717133]"
                                    : "text-gray-500 bg-gray-100"
                                    }
                                `}>
                        {result.verdict_label}
                    </h3>
                </div>
                <p className='text-gray-500'>{result.verdict_summary}</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5'>
                        <div className='p-3 rounded-2xl bg-[#1f1f34] space-y-1 flex flex-col shadow-lg'>
                            <span className='text-gray-500'>Keyword Match</span>
                            <div className='flex justify-between items-center'>
                                <span className='text-lg font-semibold text-white'>{result.keyword_match_score}%</span> 
                                <div className='h-1.5 w-30 rounded-full bg-gray-500 '>
                                    <div className={`h-1.5 bg-green-500 rounded-full w-[${result.keyword_match_score}%]`}   style={{ width: `${result.keyword_match_score}%` }}
        ></div>
                                </div>      

                            </div>
                        </div>
                         <div className='p-3 rounded-2xl bg-[#1f1f34] space-y-1 flex flex-col shadow-lg'>
                            <span className='text-gray-500'>Formating</span>
                            <div className='flex justify-between items-center'>
                                <span className='text-lg font-semibold text-white'>{result.formatting_score}%</span>
                                <div className='h-1.5 w-30 rounded-full bg-gray-500 '>
                                    <div className={`h-1.5 bg-green-500 rounded-full w-[${result.formatting_score}%]`} style={{ width: `${result.formatting_score}%` }}></div>
                                </div> 
                            </div>
                        </div>
                </div>
                
            </div>

        </div>
        
        {/* Bottom */}
        <div className='bg-secondary px-5 py-4 rounded-4xl border border-gray-800 space-y-5 '>
            <div className='p-3 border-b-2 border-[#FFFFFF0D]'>
                <ul className='flex gap-10'>
                    <li className='text-primary'>Overview</li>
                    {/* <li className='text-gray-500'>Missing Keywords</li>
                    <li className='text-gray-500'>Improvemnet suggestions</li>
                    <li className='text-gray-500'>ATS Formatting</li> */}
                </ul>
            </div>
            <div className='space-y-5'>
                <h3 className='uppercase text-white text-lg font-semibold'>Missing Skills</h3>
                <ul className='flex flex-wrap gap-3'>
                    {(result.missing_keywords).map((keyword, index)=>(
                        <li key={index} className='bg-[#F871711A] text-red-400 py-1 px-4 text-sm rounded-full border border-[#F8717133] font-semibold'>{keyword}</li>
                    ))}
                   
                </ul>
            </div>
            <div className='space-y-5'>
                <h3 className='uppercase text-white text-lg font-semibold'>Matched Skills</h3>
                <ul className='flex flex-wrap gap-3 max-w-full'>
                    {(result.matched_skills).map((skill, index)=>(
                        <li key={index} className='bg-green-950 text-green-500 py-1 px-4 text-sm rounded-full border border-[#F8717133] font-semibold'>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className='space-y-5'>
                <h3 className='text-white font-semibold uppercase'>AI Suggestions</h3>
                <ul  className='list-disc marker:text-primary pl-5 space-y-5 md:space-y-1'>
                    {(result.improvement_suggestions).map((suggestion, index)=>(

                    <li key={index} className='text-gray-500'>{suggestion}</li>
                    ))}
                </ul>
            </div>
            {/* <div className='space-y-5'>
                <h3 className='text-red-600 font-semibold uppercase'>Critical Errors</h3>
                <ul  className='list-disc marker:text-red-500 pl-5'>
                    {(result.critical_errors).map((error, index)=>(

                    <li key={index} className='text-gray-500'>{error}</li>
                    ))}
                </ul>
            </div> */}

        </div>
      


        
   </section>
  )
}

export default ResultSection
