"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Clock, ArrowRight } from "lucide-react"
import { getTranslations } from "@/lib/i18n/config"

export function TimeConverter() {
  const t = getTranslations("en")
  const [estTime, setEstTime] = useState("")
  const [istTime, setIstTime] = useState("")
  const [currentEST, setCurrentEST] = useState("")
  const [currentIST, setCurrentIST] = useState("")

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date()

      // EST time (UTC-5)
      const estFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })

      // IST time (UTC+5:30)
      const istFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })

      setCurrentEST(estFormatter.format(now))
      setCurrentIST(istFormatter.format(now))
    }

    updateCurrentTime()
    const interval = setInterval(updateCurrentTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!estTime) {
      setIstTime("")
      return
    }

    const [hours, minutes] = estTime.split(":").map(Number)
    const estDate = new Date()
    estDate.setHours(hours, minutes, 0, 0)

    // Add 10 hours and 30 minutes for IST
    const istDate = new Date(estDate.getTime() + (10 * 60 + 30) * 60 * 1000)

    const istHours = istDate.getHours().toString().padStart(2, "0")
    const istMinutes = istDate.getMinutes().toString().padStart(2, "0")

    setIstTime(`${istHours}:${istMinutes}`)
  }, [estTime])

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-card shadow-lg">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {t.converter.currentTime} (EST)
            </label>
            <div className="text-3xl font-bold text-primary">{currentEST || "--:--:--"}</div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              {t.converter.currentTime} (IST)
            </label>
            <div className="text-3xl font-bold text-foreground">{currentIST || "--:--:--"}</div>
          </div>
        </div>

        <div className="h-px bg-border" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
          <div className="space-y-2">
            <label htmlFor="est-time" className="text-sm font-medium">
              {t.converter.estLabel}
            </label>
            <input
              id="est-time"
              type="time"
              value={estTime}
              onChange={(e) => setEstTime(e.target.value)}
              className="w-full h-12 px-4 rounded-lg border border-input bg-background text-lg focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex items-center justify-center pb-2">
            <ArrowRight className="h-6 w-6 text-muted-foreground" />
          </div>

          <div className="space-y-2">
            <label htmlFor="ist-time" className="text-sm font-medium">
              {t.converter.istLabel}
            </label>
            <input
              id="ist-time"
              type="time"
              value={istTime}
              readOnly
              className="w-full h-12 px-4 rounded-lg border border-input bg-muted text-lg"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
