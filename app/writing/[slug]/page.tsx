import { getBlogPostMetadata } from "@/app/writing/_lib/getBlogPostData";
import type { Metadata } from "next/types";
import dynamic from "next/dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const { metadata } = await getBlogPostMetadata(slug);

  if (metadata) {
    return metadata;
  } else {
    throw new Error(`No metadata found for blog post: ${slug}`);
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const BlogMarkdown = dynamic(() => import("@/writings/" + slug + ".mdx"));

  return <BlogMarkdown />;
}
