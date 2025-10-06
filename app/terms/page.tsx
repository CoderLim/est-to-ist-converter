import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use - EST to IST Converter",
  description:
    "Terms of Use for esttoist.online EST to IST converter. Read our terms before using our time zone conversion service.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  const t = getTranslations("en")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t.terms.title}</h1>
            <p className="text-sm text-muted-foreground mb-8">{t.terms.lastUpdated}</p>

            <div className="prose prose-gray max-w-none space-y-8">
              <p className="text-lg leading-relaxed">{t.terms.intro}</p>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section1Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section1Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section2Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section2Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section3Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section3Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section4Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section4Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section5Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section5Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section6Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section6Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section7Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section7Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.terms.section8Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.terms.section8Content}</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
