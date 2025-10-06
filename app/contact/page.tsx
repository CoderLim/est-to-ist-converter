import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { getTranslations } from "@/lib/i18n/config"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - EST to IST Converter",
  description:
    "Contact esttoist.online for questions about our EST to IST converter. Get support for time zone conversion between Eastern Standard Time and Indian Standard Time.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  const t = getTranslations("en")

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">{t.contact.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{t.contact.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 space-y-3 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm text-muted-foreground">
                  <a href={`mailto:${t.common.email}`} className="text-primary hover:underline">
                    {t.common.email}
                  </a>
                </p>
              </Card>

              <Card className="p-6 space-y-3 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold">EST to IST Support</h3>
                <p className="text-sm text-muted-foreground">Questions about time zone conversion</p>
              </Card>

              <Card className="p-6 space-y-3 text-center">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold">Feedback</h3>
                <p className="text-sm text-muted-foreground">Help us improve our EST to IST converter</p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t.contact.info}</p>
                </div>

                <Card className="p-6 bg-muted/50">
                  <h3 className="font-semibold mb-3">{t.contact.directContact}</h3>
                  <a href={`mailto:${t.common.email}`} className="text-lg text-primary hover:underline font-medium">
                    {t.common.email}
                  </a>
                </Card>

                <div className="space-y-4">
                  <h3 className="font-semibold">Common Questions</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>How to use the EST to IST converter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>EST to IST time difference calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Technical support for time zone conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Feature requests for EST to IST tool</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
