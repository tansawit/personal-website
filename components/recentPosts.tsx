import Link from 'next/link'

export default async function RecentPosts({ posts }: { posts: { title: string; excerpt: string; date: string; slug: string }[] }) {

  return (
    <div className="mt-20 font-mono">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">blog</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
            <Link 
              href={`/posts/${post.slug}`}
              className="text-white hover:underline hover:decoration-[#e3b44c] font-medium text-base sm:text-lg"
            >
              {post.title}
            </Link>
            <p className="mt-1 text-gray-600 text-sm sm:text-base">{post.excerpt}</p>
            <p className="mt-1 text-gray-400 text-xs sm:text-sm">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}