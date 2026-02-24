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
    <section className='space-y-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] scroll-mt-24' id='features'>
    
    
        <div className='text-center space-y-4'>
            <h1 className='text-4xl font-black transition-all duration-500 hover:tracking-tight'>Engineered for Results</h1>
            <p className='text-slate-400 transition-all duration-500 hover:text-slate-300'>Everything you need to bypass filters and impress recruiters.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {featureList.map((feature, index)=>(

            <div key={index} className='bg-background border border-border p-10 rounded-3xl transition-all   hover:bg-white/5 duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10'>
                <span className="material-symbols-outlined text-primary text-4xl mb-4  scale-140 transition-transform duration-300 hover:scale-150">{feature.icon}</span>
                <div className='space-y-2'>
                    <h3 className='text-lg font-bold capitalize transition-all duration-300 hover:text-primary'>{feature.title}</h3>
                    <p className='text-slate-400 transition-all duration-300 hover:text-slate-300'>{feature.desc}</p>
                </div>
            </div>
        ))}

          
        </div>
    </section>
  )
}

export default FeaturesSection