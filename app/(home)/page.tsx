import Image from "next/image";
import Subheading from "@/app/subheading";

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
          I&rsquo;m a software engineer with extensive experience crafting and
          building intuitive user interfaces that solve real-world problems.
          With over a decade of experience leading teams and managing product
          development, I bring technical expertise and a knack for thoughtful
          solutions to every project I work on.
        </p>
        <p className="text-foreground/80 font-medium text-lg">
          I&rsquo;ve worked across many industries and have tackled enough
          challenges to know how to navigate complexity with confidence and
          focus. Getting things done tactfully requires understanding and
          balancing the tradeoffs involved.
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
