import Link from 'next/link'

interface Project {
  title: string
  description: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "slinky dashboard",
    description: "Beautifully designed components that you can copy and paste into your apps.",
    githubUrl: "https://github.com/shadcn/ui"
  },
  {
    title: "next-auth",
    description: "Authentication for Next.js applications made simple.",
    githubUrl: "https://github.com/nextauthjs/next-auth"
  },
  {
    title: "swr",
    description: "React Hooks for data fetching and caching.",
    githubUrl: "https://github.com/vercel/swr"
  },
  
]

export default function Component() {
  return (
    <div className="font-mono">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">projects</h2>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
            <Link 
              href={project.githubUrl}
              className="text-white hover:underline hover:decoration-[#e3b44c] font-medium text-base sm:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </Link>
            <p className="mt-1 text-gray-600 text-sm sm:text-base w-full">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}