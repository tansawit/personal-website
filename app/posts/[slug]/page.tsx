import Link from "next/link";
import { draftMode } from "next/headers";
import Image from "next/image";
import { format } from "date-fns";

import MoreStories from "../../more-stories";
import Avatar from "../../avatar";
import Date from "../../date";
import CoverImage from "../../cover-image";
import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      <article className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-3xl font-mono">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-500 mb-4 block">
          <Date dateString={post.date} />
        </time>
        {post.coverImage && (
          <div className="mb-8">
            <CoverImage title={post.title} url={post.coverImage.url} />
          </div>
        )}
        <div 
          className="prose prose-invert max-w-none"
        >
          <Markdown content={post.content} />
        </div>
      </article>
    </div>
  );
}
