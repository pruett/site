import Image from "next/image";
import Subheading from "@/app/subheading";
import Link from "next/link";

const bullets = [
  "Prioritize simplicity and usability in software design",
  "Focus on creating real-world impact through thoughtful solutions",
  "Combine user-centered design with technical expertise",
  "Emphasize collaboration and clarity in the development process",
  "Strive for interfaces that are intuitive, functional, and visually elegant",
];

export default function Page() {
  return (
    <>
      <Image
        src="/pro.jpeg"
        alt="profile picture of kevin pruett"
        width={100}
        height={100}
        className="rounded-full"
      />
      <Section title="About">
        <p className="text-2xl font-semibold">
          I&rsquo;m a software engineer who builds web applications that solve
          real-world problems. With years of leading teams and shaping products,
          I mix technical chops with creativity to deliver solutions that
          actually make a difference.
        </p>
        <p className="text-foreground/80 font-medium text-lg">
          From startups to fintech and everything in between &mdash; have a look
          at{" "}
          <Link
            href="/work"
            className="text-blue-500 hover:text-blue-700 transition-all"
          >
            my past experience
          </Link>
          .
        </p>
      </Section>

      <Section title="Approach">
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <Bullet key={index} text={bullet} />
          ))}
        </ul>
      </Section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[60ch] space-y-5">
      <Subheading>{title}</Subheading>
      {children}
    </section>
  );
}

function Bullet({ text }: { text: string }) {
  return <li className="list-disc list-inside text-lg">{text}</li>;
}
