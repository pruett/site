import { promises as fs } from "fs";
import path from "path";

async function getWritingsSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const writingsDir = path.join(process.cwd(), "writings");
  const slugs = await getWritingsSlugs(writingsDir);

  const notes = slugs.map((slug) => ({
    url: `https://kevinpruett.com/writing/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/work", "/writings"].map((route) => ({
    url: `https://kevinpruett.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...notes];
}
