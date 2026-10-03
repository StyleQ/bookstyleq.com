import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Each post is a markdown file in content/blog/<slug>.md with YAML
// frontmatter for metadata. The body is parsed to HTML at read time and
// rendered via dangerouslySetInnerHTML in components/BlogPostTemplate.js.
const POSTS_DIR = path.join(process.cwd(), "content/blog");
const WORDS_PER_MINUTE = 200;

// Estimated reading time from the raw markdown word count, rounded up to the
// nearest minute (minimum 1), so it reflects actual body length rather than a
// hand-maintained frontmatter field.
function calculateReadTime(content) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

export function getPostSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return {
    slug,
    ...data,
    readTime: calculateReadTime(content),
    contentHtml: marked.parse(content),
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
