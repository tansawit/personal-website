import React from 'react'
import Link from 'next/link'

interface Experience {
  title: string
  company: string
  identifier: string
  isCurrent: boolean
  companyUrl: string
}

const experiences: Experience[] = [
  { title: 'Head of Integrations', company: 'Initia Labs', identifier: 'PRESENT', isCurrent: true, companyUrl: 'https://twitter.com/initiafdn' },
  { title: 'Founder & CEO', company: 'Alles Labs (acq. by Initia Labs)', identifier: '2022-2024', isCurrent: false, companyUrl: 'https://twitter.com/alleslabs' },
  { title: 'Project Lead', company: 'Nebula Protocol', identifier: '2021-2022', isCurrent: false, companyUrl: 'https://twitter.com/nebula_protocol' },
]

const CurrentCircle = () => (
  <div className="relative w-2 h-2">
    <div className="absolute -left-[1px] -top-[1px] w-[10px] h-[10px] rounded-full border border-green-500" />
    <div className="w-full h-full bg-green-500 rounded-full" />
  </div>
)

export default function ExperienceSection() {
  return (
    <div className="text-white p-6 font-mono">
      <div className="relative pt-6">
        <div className="absolute left-[3px] top-0 bottom-2 w-[1px] bg-gray-700" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 pl-4 relative">
            <div className="absolute left-0 top-1">
              {exp.isCurrent ? (
                <CurrentCircle />
              ) : (
                <div className="w-2 h-2 bg-gray-500 rounded-full" />
              )}
            </div>
            
            <div className="pl-4 pb-6">
              <h3 className="text-sm font-normal mb-1">{exp.title}</h3>
              <p className="text-xs text-gray-400 mb-1">
                <Link href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {exp.company}
                </Link>
              </p>
              {exp.identifier && (
                <span className="text-[10px] bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                  {exp.identifier}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}