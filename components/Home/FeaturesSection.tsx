import React from 'react'

interface FeatureProp{
    icon:string;
    title:string;
    desc:string;

}


const FeaturesSection = () => {
    const featureList:FeatureProp[] = [
        {
            icon:"model_training",
            title:"AI Matching",
            desc:"Advanced neural networks simulate how modern ATS software ranksapplicants."
        },
        {
            icon:"key",
            title:"Keyword Optimization",
            desc:"Identifies hard and soft skills recruiters are searching for in your specific role."
        },
        {
            icon:"distance",
            title:"Skill Gap Detection",
            desc:"Pinpoints exactly what qualifications are missing from your profile compared to the JD."
        },
        {
            icon:"edit_note",
            title:"Rewrite Suggestions",
            desc:"Get precise bullet point improvements that highlight impact overdaily tasks."
        },
        {
            icon:"fact_check",
            title:"ATS Checker",
            desc:"Test for common parsing errors caused by complex layouts, tables,or images."
        },
        {
            icon:"download",
            title:"Smart Download",
            desc:"Export optimized resumes in ATS-friendly formats proven to be readable by 99% of software."
        }
]
  return (
    <section className='space-y-10'>
    
    
        <div className='text-center space-y-4'>
            <h1 className='text-4xl font-black '>Engineered for Results</h1>
            <p className='text-slate-400'>Everything you need to bypass filters and impress recruiters.</p>
        </div>

        <div className='grid grid-cols-3 gap-6'>
        {featureList.map((feature, index)=>(

            <div key={index} className='bg-background border border-border p-10 rounded-3xl transition-all   hover:bg-white/5'>
                <span className="material-symbols-outlined text-primary text-4xl mb-4  scale-140 transition-transform">{feature.icon}</span>
                <div className='space-y-2'>
                    <h3 className='text-lg font-bold capitalize'>{feature.title}</h3>
                    <p className='text-slate-400'>{feature.desc}</p>
                </div>
            </div>
        ))}

          
        </div>
    </section>
  )
}

export default FeaturesSection
