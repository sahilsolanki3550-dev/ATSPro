import { AiResponse } from '@/types/type'

interface ResultProp{
    result:AiResponse
}




const ResultSection:React.FC<ResultProp> = ( {result}) => {

  
  return (
   <section className='space-y-8 transition-all duration-300'>
        {/* Top */}
        <div className='bg-secondary flex gap-8 px-8 py-4 rounded-4xl border border-gray-800 items-center'>
            <div className='flex flex-col justify-center items-center  h-40 w-40 border border-primary   shadow-lg rounded-full p-10'>
                <h1 className='text-white text-[45px] font-bold'>{result.match_percentage}%</h1>
                <span className='text-gray-500 uppercase text-[9px] font-bold'>Match Score</span>
            </div>
            <div className='space-y-2'>
                <div className='flex justify-between items-center'>   
                    <h3 className='text-white font-semibold text-2xl'>AI Verdict</h3>
                    <h3 className={` bg-green-950 ${result.match_percentage<=30?"text-red-500": "text-green-500" } rounded-full px-4 py-2`}>
                        {result.match_percentage <= 30?"Bad Match":"Good Match"}
                    </h3>
                </div>
                <p className='text-gray-500'>{result.overall_feedback}</p>
                
                <div className='grid grid-cols-2 gap-5 py-5'>
                        <div className='p-3 rounded-2xl bg-[#1f1f34] space-y-1 flex flex-col shadow-lg'>
                            <span className='text-gray-500'>Keyword Match</span>
                            <span className='text-lg font-semibold text-white'>80%</span> 
                        </div>
                         <div className='p-3 rounded-2xl bg-[#1f1f34] space-y-1 flex flex-col shadow-lg'>
                            <span className='text-gray-500'>Formating</span>
                            <span className='text-lg font-semibold text-white'>80%</span> 
                        </div>
                </div>
                
            </div>
        </div>
        
        {/* Bottom */}
        <div className='bg-secondary px-5 py-4 rounded-4xl border border-gray-800 space-y-5 '>
            <div className='p-3 border-b-2 border-[#FFFFFF0D]'>
                <ul className='flex gap-10'>
                    <li className='text-primary'>Overview</li>
                    <li className='text-gray-500'>Missing Keywords</li>
                    <li className='text-gray-500'>Improvemnet suggestions</li>
                    <li className='text-gray-500'>ATS Formatting</li>
                </ul>
            </div>
            <div className='space-y-5'>
                <h3 className='uppercase text-white text-lg font-semibold'>Missing Skills</h3>
                <ul className='flex gap-3'>
                    {(result.missing_skills).map((skill, index)=>(
                        <li key={index} className='bg-[#F871711A] text-red-400 py-1 px-4 text-sm rounded-full border border-[#F8717133] font-semibold'>{skill}</li>
                    ))}
                   
                </ul>
            </div>
            <div className='space-y-5'>
                <h3 className='uppercase text-white text-lg font-semibold'>Matched Skills</h3>
                <ul className='flex gap-3'>
                    {(result.matched_skills).map((skill, index)=>(
                        <li key={index} className='bg-[#F871711A] text-red-400 py-1 px-4 text-sm rounded-full border border-[#F8717133] font-semibold'>{skill}</li>
                    ))}
                    
                </ul>
            </div>
            <div className='space-y-5'>
                <h3 className='text-white font-semibold uppercase'>AI Suggestions</h3>
                <ul  className='list-disc marker:text-primary pl-5'>
                    {(result.improvement_suggestions).map((suggestion, index)=>(

                    <li key={index} className='text-gray-500'>{suggestion}</li>
                    ))}
                </ul>
            </div>

        </div>
   </section>
  )
}

export default ResultSection
