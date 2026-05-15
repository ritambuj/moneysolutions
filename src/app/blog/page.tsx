import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero, PageShell } from "@/components/site/page-shell";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Money Star",
  description: "Articles on personal loans, credit scores, home loans and smart borrowing.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <PageShell>
      <PageHero
        title="Blog & articles"
        subtitle="Practical guides to borrow smarter — from CIBIL tips to product comparisons."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-md lg:flex">
          <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {featured.category}
            </span>
            <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
              <Link href={`/blog/${featured.slug}`} className="hover:text-primary">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{formatBlogDate(featured.date)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {featured.readMinutes} min read
              </span>
            </div>
            <Link
              href={`/blog/${featured.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Read article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{formatBlogDate(post.date)}</span>
                <span>{post.readMinutes} min</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
