import { Info } from "lucide-react";
import BrandLeaf from "@/components/BrandLeaf";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Reveal from "@/components/Reveal";

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2.5">
      <BrandLeaf className="h-4 w-4 text-sq-coral" />
      <span className="text-[13px] font-semibold tracking-[2.4px] text-sq-rose">
        {children}
      </span>
    </div>
  );
}

// Shared layout for text-heavy policy pages (Privacy, Terms).
// sections: [{ heading, paragraphs?: string[], bullets?: string[] }]
export default function LegalDoc({
  eyebrow = "LEGAL",
  title,
  updated,
  intro,
  sections = [],
  email = "chantel@bookstyleq.com",
}) {
  return (
    <main className="overflow-hidden">
      <NavBar solid />

      <section className="px-6 pt-14 pb-8 md:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-heading text-[44px] leading-[1.1] font-medium text-sq-ink md:text-[56px]">
            {title}
          </h1>
          {updated && (
            <p className="text-[13px] tracking-[1px] text-sq-muted">
              Last updated: {updated}
            </p>
          )}
        </div>
      </section>

      <section className="mt-8 bg-white px-6 py-12 md:py-16">
        <Reveal className="mx-auto max-w-3xl">
          <div>
            <div className="mb-8 flex items-start gap-3 rounded-2xl bg-sq-peach-soft px-5 py-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-sq-plum opacity-80" />
              <p className="text-[14px] leading-6 text-sq-plum">
                This is placeholder content to get the page live. It is not legal
                advice. Replace it with your reviewed policy before launch.
              </p>
            </div>

            {intro && (
              <p className="text-[16px] leading-8 text-sq-muted">{intro}</p>
            )}

            <div className="mt-2 flex flex-col gap-8">
              {sections.map((section, i) => (
                <div key={section.heading}>
                  <h2 className="font-heading text-[22px] font-medium text-sq-ink">
                    {i + 1}. {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph, j) => (
                    <p
                      key={j}
                      className="mt-3 text-[15px] leading-7 text-sq-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-3 flex flex-col gap-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-sq-coral" />
                          <span className="text-[15px] leading-7 text-sq-muted">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-sq-line pt-6">
              <p className="text-[15px] leading-7 text-sq-muted">
                Questions? Contact us at{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-sq-rose underline-offset-4 transition hover:underline"
                >
                  {email}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
