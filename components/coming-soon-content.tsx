"use client"

import { Logo } from "@/components/logo"
import { CountdownTimer } from "@/components/countdown-timer"
import { QrCodeBlock } from "@/components/qr-code-block"
import { ShoppingCart, Send } from "lucide-react"

// Фиксированная дата — таймер не сбрасывается при перезагрузке
const TARGET_DATE = new Date("2026-05-10T00:00:00")

export function ComingSoonContent() {

  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <Logo />
      </header>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="flex flex-col items-center gap-10 max-w-2xl text-center">
          {/* Heading */}
          <div className="flex flex-col items-center gap-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide border border-primary/20">
              Скоро открытие
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Скоро станет доступно
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
              А пока что вы можете купить наши товары на{" "}
              <a
                href="https://ozon.ru/s/shopmeshtastic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline underline-offset-4 transition-colors"
              >
                OZON
              </a>
            </p>
          </div>

          {/* Countdown */}
          <CountdownTimer targetDate={TARGET_DATE} />

          {/* QR + CTA section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              <QrCodeBlock imgSrc="/qr-code-ozon.png" url="https://ozon.ru/s/shopmeshtastic" size={160} />
              
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left leading-relaxed">
                Отсканируйте QR-код или нажмите кнопку ниже, чтобы перейти к нашим товарам на OZON
              </p>
              <a
                href="https://ozon.ru/s/shopmeshtastic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <ShoppingCart className="w-4 h-4" />
                Перейти на OZON
              </a>
            </div>
          </div>
                    {/* QR + CTA section */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              <QrCodeBlock imgSrc="/qr-code-tg.png" url="https://t.me/shopmeshtastic" size={160} />
              
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left leading-relaxed">
                Отсканируйте QR-код или нажмите кнопку ниже, чтобы перейти в наш канал в Telegram
              </p>
              <a
                href="https://t.me/shopmeshtastic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Перейти в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-5 md:px-12 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          {"© 2026 ShopMeshtastic. Все права защищены."}
        </p>
      </footer>
    </main>
  )
}
