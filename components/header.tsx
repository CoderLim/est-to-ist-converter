import Link from "next/link"
import { getTranslations } from "@/lib/i18n/config"

export function Header() {
  const t = getTranslations("en")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">ET</span>
          </div>
          <span className="text-lg font-semibold">{t.common.siteName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            {t.nav.home}
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t.nav.privacy}
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t.nav.terms}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t.nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  )
}
