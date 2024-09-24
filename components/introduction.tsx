import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Projects from "./projects"
import RecentPosts from "./recentPosts"

export default function Component() {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 font-mono">
      <header className="flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold">tansawit</Link>
        <div className="flex space-x-4">
          <Link href="https://github.com/tansawit" className="text-gray-600 hover:text-yellow-500">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/tansawit" className="text-gray-600 hover:text-yellow-500">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com/tansawit" className="text-gray-600 hover:text-yellow-500">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </header>
      
{/*       <hr className="border-gray-200" />
      
      <div className="space-y-4">
        <p>
          I'm a software engineer at Ramp building the fastest-growing <Link href="#" className="underline">bill payment platform</Link> in
          America. I'm also chief of staff at <Link href="#" className="underline">Contrary</Link>, the investment firm that backs the bold. I'm
          passionate about startups and full-stack development.
        </p>
        
        <p>
          I attend the University of Michigan, studying computer science and mathematics. I'm
          originally from Los Angeles but spend most of my time in New York City and Ann Arbor.
        </p>
        
        <p>
          <Link href="#" className="underline">View my projects</Link> or follow me on <Link href="#" className="underline">GitHub</Link>, <Link href="#" className="underline">LinkedIn</Link>, and <Link href="#" className="underline">Twitter</Link>.
        </p>
      </div> */}
    </div>
  )
}