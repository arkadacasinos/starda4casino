import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark bg-[#0c0d10] text-[#e8e9ec]">
      <head>
        <title>Starda Casino официальный сайт | Старда Казино зеркало рабочее играть онлайн</title>
        <meta
          name="description"
          content="Starda Casino официальный сайт и рабочее зеркало Старда Казино. Быстрый вход, регистрация, бонус 100% + 500 FS на первый депозит. Играйте в Starda Casino онлайн на проверенном официальном ресурсе."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://starda4casino.vercel.app/" />
        <meta name="theme-color" content="#0c0d10" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Starda Casino официальный сайт | Старда Казино зеркало рабочее играть онлайн" />
        <meta
          property="og:description"
          content="Starda Casino официальный сайт и рабочее зеркало Старда Казино. Быстрый вход, регистрация, бонус 100% + 500 FS на первый депозит. Играйте в Starda Casino онлайн на проверенном официальном ресурсе."
        />
        <meta property="og:url" content="https://starda4casino.vercel.app/" />
        <meta property="og:site_name" content="Starda Casino" />
        <meta property="og:image" content="https://starda4casino.vercel.app/hero-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Starda Casino официальный сайт | Старда Казино зеркало рабочее играть онлайн" />
        <meta
          name="twitter:description"
          content="Starda Casino официальный сайт и рабочее зеркало Старда Казино. Быстрый вход, регистрация, бонус 100% + 500 FS на первый депозит."
        />
        <meta name="twitter:image" content="https://starda4casino.vercel.app/hero-banner.png" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="min-h-screen bg-[#0c0d10] text-[#e8e9ec] antialiased selection:bg-[#e52338] selection:text-white">
        {children}
      </body>
    </html>
  )
}
