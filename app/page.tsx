import Image from "next/image";

const bullets = [
  "Prioritize simplicity and usability in software design",
  "Focus on creating real-world impact through thoughtful solutions",
  "Combine user-centered design with technical expertise",
  "Emphasize collaboration and clarity in the development process",
  "Strive for interfaces that are intuitive, functional, and visually elegant",
];
export default function Page() {
  return (
    <div className="container mx-auto md:border min-h-screen border-t-0 border-b-0 border-dotted p-[5%] flex flex-col gap-8">
      <Image
        src="/pro.jpeg"
        alt="profile picture of kevin pruett"
        width={100}
        height={100}
        className="rounded-full"
      />
      <Section title="About">
        <p className="text-2xl font-semibold">
          I&rsquo;m a software engineer who turns complex ideas into beautifully
          simple web applications. With extensive experience crafting intuitive
          user interfaces, I bring technical expertise and a knack for
          thoughtful solutions. With over a decade of leading teams and managing
          product development, I&rsquo;ve been around the block, enough to know
          how to get things done and still enjoy the ride.
        </p>
      </Section>

      <Section title="Approach">
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <Bullet key={index} text={bullet} />
          ))}
        </ul>
      </Section>
    </div>
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
      <h2 className="border px-3 py-1 rounded-full border-[rgba(241,90,34,0.3)] inline-block font-mono uppercase text-xs tracking-wider font-extralight text-foreground/80">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Bullet({ text }: { text: string }) {
  return <li className="list-disc list-inside text-lg">{text}</li>;
}
