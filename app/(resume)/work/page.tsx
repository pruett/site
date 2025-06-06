export default function Page() {
  return (
    <div className="max-w-[60ch] mx-auto space-y-12">
      {/* Summary Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Summary</h2>
        <p className="text-muted-foreground leading-relaxed">
          Staff Frontend Engineer with 14+ years of experience architecting
          scalable frontend systems, mentoring engineers, and delivering
          accessible, performant, and visually polished web applications. Adept
          in modern technologies like TypeScript, React, Next.js, and Node.js,
          with deep experience scaling design systems, driving cross-functional
          collaboration, and building production-grade platforms. Passionate
          about systems thinking, developer experience, and building UI
          infrastructure that lasts. I thrive at the intersection of design and
          engineering—bringing clarity, craft, and a relentless focus on
          delivering elegant, reliable software.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2 text-foreground">
              Languages & Frameworks
            </h3>
            <p className="text-sm text-muted-foreground">
              TypeScript, JavaScript, React.js, Next.js, Node.js
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-foreground">User Interface</h3>
            <p className="text-sm text-muted-foreground">
              Design Systems, Component Libraries, Storybook, Component-Driven
              Design
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-foreground">
              DevOps & Infrastructure
            </h3>
            <p className="text-sm text-muted-foreground">
              GitHub Actions, Terraform, Docker, CI/CD
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-foreground">Testing</h3>
            <p className="text-sm text-muted-foreground">
              Playwright, React Testing Library, Cypress, Jest
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-medium mb-2 text-foreground">Practices</h3>
            <p className="text-sm text-muted-foreground">
              TDD, Web Accessibility, Performance Optimization, Technical
              Specification Documentation, Cross-Functional Collaboration,
              Agile/Scrum
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Experience
        </h2>
        <div className="space-y-8">
          {/* Prime Financial Technologies */}
          <div className="border-l-2 border-muted pl-6">
            <div className="flex flex-wrap justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Staff Frontend Engineer
                </h3>
                <p className="text-slate-500 font-medium">
                  Prime Financial Technologies
                </p>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                June 2023 – May 2025
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Led architecture and development of Prime's commercial web
                products using React and Next.js, laying the foundation for
                scalable growth and rapid iteration
              </li>
              <li>
                • Built a design-token-driven UI component system with
                Storybook, enabling faster delivery, reducing visual
                regressions, and streamlining collaboration with design
              </li>
              <li>
                • Mentored junior engineers through pairing, PR reviews, and
                technical presentations—resulting in stronger code quality,
                deeper understanding, and higher team confidence
              </li>
              <li>
                • Championed best practices including implementation specs and
                design documentation to improve clarity and execution across the
                team
              </li>
            </ul>
          </div>

          {/* Ro */}
          <div className="border-l-2 border-muted pl-6">
            <div className="flex flex-wrap justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Senior Software Engineer
                </h3>
                <p className="text-slate-500 font-medium">Ro</p>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                December 2020 – April 2023
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Re-architected Ro's diagnostics platform from static PDFs to a
                personalized, interactive health dashboard—resulting in a 200%+
                increase in user engagement and 1.75x improvement in interaction
                rates
              </li>
              <li>
                • Developed a custom CMS and scalable rules engine enabling
                non-technical healthcare professionals to contextualize 25+ lab
                results, providing patients with clear next steps and improving
                care engagement
              </li>
            </ul>
          </div>

          {/* HashiCorp */}
          <div className="border-l-2 border-muted pl-6">
            <div className="flex flex-wrap justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Senior Frontend Developer
                </h3>
                <p className="text-slate-500 font-medium">HashiCorp</p>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                April 2019 – December 2020
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Built an automated release workflow using GitHub Actions,
                Slack, and Asana—saving ~10 minutes per PR across 8 engineers
                and 10+ repositories
              </li>
              <li>
                • Developed a CI-powered dashboard to catch and report
                high-severity issues before release, significantly reducing
                production bugs and improving developer velocity
              </li>
              <li>
                • Codified team conventions via composable, testable, AST-driven
                markdown plugins—ensuring documentation consistency across
                distributed repositories
              </li>
            </ul>
          </div>

          {/* Blinker */}
          <div className="border-l-2 border-muted pl-6">
            <div className="flex flex-wrap justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Senior Frontend Developer
                </h3>
                <p className="text-slate-500 font-medium">Blinker</p>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                September 2018 – March 2019
              </span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Built a React.js + Webpack integration with Contentful
                (headless CMS), using webhooks and automated builds to empower
                non-technical stakeholders to publish content
              </li>
              <li>
                • Engineered a modular webcam capture component using browser
                APIs, achieving feature parity with native apps and integrating
                with a custom ML microservice for real-time photo analysis
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Notable Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground">
          Notable Projects
        </h2>
        <div>
          {/* Frontend Monorepo */}
          <div className="border border-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Frontend Monorepo Architecture & Infrastructure
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architected a flexible, scalable frontend monorepo using Turborepo
              and pnpm to accelerate iteration and enforce visual consistency
              across multiple product lines. Unified different tools and
              frameworks like Astro, Next.js, and Vite under a shared structure
              to support cross-domain development and component reuse. Led
              development of a CI-integrated Playwright test suite that ran
              against our staging environment to validate critical user flows
              before production releases. This served as a robust safety net,
              surfaced regressions early, and allowed the team to move quickly
              without sacrificing reliability or UX.
            </p>
          </div>

          {/* Interactive Diagnostics Platform */}
          <div className="border border-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Interactive Personalized Diagnostics Platform & Custom Rules
              Engine
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Led the transformation of Ro's diagnostics experience from static
              PDFs to a dynamic, browser-first health dashboard with interactive
              charts and personalized next steps. Built a custom rules engine
              atop a forked json-rules-engine package, enabling healthcare
              professionals to define thousands of result permutations as rules
              defined in a headless CMS. The system handled 25+ biomarkers and
              incorporated enhanced RBAC to protect HIPAA-sensitive data. The
              new experience significantly improved patient comprehension and
              was embraced by medical teams as a breakthrough tool for proactive
              care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
