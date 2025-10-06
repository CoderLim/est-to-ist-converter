import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslations } from "@/lib/i18n/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - EST to IST Converter",
  description:
    "Privacy Policy for esttoist.online EST to IST converter. Learn how we protect your data when using our time zone conversion tool.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  const t = getTranslations("en")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t.privacy.title}</h1>
            <p className="text-sm text-muted-foreground mb-8">{t.privacy.lastUpdated}</p>

            <div className="prose prose-gray max-w-none space-y-8">
              <p className="text-lg leading-relaxed">{t.privacy.intro}</p>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.privacy.section1Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.section1Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.privacy.section2Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.section2Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.privacy.section3Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.section3Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.privacy.section4Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.section4Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.privacy.section5Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.section5Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.privacy.section6Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.section6Content}</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-semibold">{t.privacy.section7Title}</h2>
                <p className="text-muted-foreground leading-relaxed">{t.privacy.section7Content}</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
