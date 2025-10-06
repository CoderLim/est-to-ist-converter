import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TimeConverter } from "@/components/time-converter"
import { getTranslations } from "@/lib/i18n/config"
import { Card } from "@/components/ui/card"
import { Clock, Zap, Globe, Shield, Users, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  const t = getTranslations("en")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Converter */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">{t.hero.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                {t.hero.subtitle}
              </p>
            </div>

            <TimeConverter />
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.introduction.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.introduction.description}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{t.introduction.content}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{t.introduction.additional}</p>
            </div>
          </div>
        </section>

        {/* How To Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t.howTo.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{t.howTo.step1Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.howTo.step1Desc}</p>
              </Card>

              <Card className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{t.howTo.step2Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.howTo.step2Desc}</p>
              </Card>

              <Card className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{t.howTo.step3Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.howTo.step3Desc}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t.features.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 space-y-4">
                <Clock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.features.feature1Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.features.feature1Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Zap className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.features.feature2Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.features.feature2Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Globe className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.features.feature3Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.features.feature3Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.features.feature4Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.features.feature4Desc}</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t.benefits.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 space-y-4">
                <Briefcase className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.benefits.benefit1Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.benefits.benefit1Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Globe className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.benefits.benefit2Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.benefits.benefit2Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.benefits.benefit3Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.benefits.benefit3Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Calendar className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.benefits.benefit4Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.benefits.benefit4Desc}</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">{t.useCases.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.useCases.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 space-y-4">
                <Briefcase className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.useCases.case1Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.useCases.case1Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.useCases.case2Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.useCases.case2Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <Clock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.useCases.case3Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.useCases.case3Desc}</p>
              </Card>

              <Card className="p-6 space-y-4">
                <GraduationCap className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold">{t.useCases.case4Title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.useCases.case4Desc}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Deep Dive Content */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-balance">
                {t.seo.title}
              </h2>
              {t.seo.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">{t.faq.title}</h2>

            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">{t.faq.q1}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{t.faq.a1}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">{t.faq.q2}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{t.faq.a2}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">{t.faq.q3}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{t.faq.a3}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">{t.faq.q4}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{t.faq.a4}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">{t.faq.q5}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{t.faq.a5}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">{t.faq.q6}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{t.faq.a6}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
