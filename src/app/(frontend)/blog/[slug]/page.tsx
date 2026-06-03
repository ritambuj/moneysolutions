import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site/page-shell";
import {
  BLOG_POSTS,
  formatBlogDate,
  getBlogPost,
} from "@/lib/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog — Money Star" };
  return {
    title: `${post.title} — Money Star Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-primary">
          {post.category}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>{formatBlogDate(post.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readMinutes} min read
          </span>
          <span>{post.author}</span>
        </div>
        <div className="prose prose-slate mt-10 max-w-none space-y-5 text-base leading-relaxed text-muted-foreground">
          {post.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-center">
          <p className="font-semibold text-foreground">Ready to compare offers?</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Start your application in minutes with Money Star.
          </p>
          <Link
            href="/apply"
            className="mt-4 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Apply for loan
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
