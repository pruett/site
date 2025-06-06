import Link from "next/link";
import { promises as fs } from "fs";
import { getBlogPostMetadata } from "@/app/writing/_lib/getBlogPostData";
import Subheading from "@/app/subheading";

export default async function Page() {
  const writingsDir = await fs.readdir(process.cwd() + "/writings", "utf8");

  const writingsWithMetadataPromises = Promise.all(
    writingsDir.map((writing) => {
      const slug = writing.replace(/\.mdx$/, "");
      return getBlogPostMetadata(slug);
    }),
  );

  const allWritings = await writingsWithMetadataPromises;

  const sortedWritings = allWritings.sort((a, b) => {
    return b.metadata.date.getTime() - a.metadata.date.getTime();
  });

  return (
    <>
      <Subheading>Writings</Subheading>
      <ul className="flex flex-col gap-8">
        {sortedWritings.map((writing) => (
          <li key={writing.slug} className="flex flex-col gap-2">
            <div className="flex items-center">
              <div>
                <Link
                  href={`/writing/${writing.slug}`}
                  className="text-blue-500 hover:text-blue-800 transition-all"
                >
                  {writing.metadata.title}
                </Link>
              </div>
              <span className="text-xs text-foreground/50">
                &nbsp;&mdash; {writing.metadata.date.toDateString()}
              </span>
            </div>

            <div
              className="text-foreground/70 text-sm"
              dangerouslySetInnerHTML={{ __html: writing.metadata.description }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
