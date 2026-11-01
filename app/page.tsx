export default function HomePage() {
  const REF_URL = 'https://comboyolo.site/aeaofj2k27'

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e8e9ec] flex flex-col font-sans">
      {/* Mobile Drawer (Pure CSS :target) */}
      <div
        id="starda-drawer"
        className="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
      >
        <a href="#!" className="absolute inset-0" aria-label="Закрыть меню" />
        <div className="relative w-72 max-w-[80vw] h-full bg-[#121318] border-r border-white/10 p-5 flex flex-col gap-6 shadow-2xl z-10">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <a href={REF_URL} className="flex items-center gap-1.5 text-2xl font-black tracking-wider text-white">
              <span className="text-[#e52338]">STAR</span>DA
            </a>
            <a
              href="#!"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white"
              aria-label="Закрыть"
            >
              ✕
            </a>
          </div>

          <div className="flex flex-col gap-2 text-sm font-medium">
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#e52338]/15 text-[#e52338] font-bold">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C9.5 7 4 10 4 14a8 8 0 0 0 16 0c0-4-5.5-7-8-12z" /></svg>
              <span>Казино</span>
            </a>
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/5 hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 2a10 10 0 0 1 0 20M2 12a10 10 0 0 1 20 0" stroke="currentColor" strokeWidth="1.5" /></svg>
              <span>Спорт</span>
            </a>
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/5 hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 12v10H4V12h16m1-7h-3.2c.7-.8 1.2-1.8 1.2-3 0-2.2-1.8-4-4-4-1.9 0-3.5 1.3-3.9 3.1h-.2C10.5-.2 8.9-1.5 7-1.5 4.8-1.5 3 .3 3 2.5c0 1.2.5 2.2 1.2 3H1v4h22V5h-2z" /></svg>
              <span>Бонусы</span>
            </a>
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/5 hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" /></svg>
              <span>VIP Клуб</span>
            </a>
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/5 hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              <span>Промоакции</span>
            </a>
            <a href={REF_URL} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:bg-white/5 hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 10c0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.5 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5A10 10 0 0 0 12 2z" /></svg>
              <span>Поддержка 24/7</span>
            </a>
          </div>

          <div className="mt-auto flex flex-col gap-2.5 pt-4 border-t border-white/10">
            <a
              href={REF_URL}
              className="std4-btn-red w-full py-3 rounded-lg text-center font-bold text-sm tracking-wider uppercase"
            >
              Регистрация
            </a>
            <a
              href={REF_URL}
              className="w-full py-2.5 rounded-lg text-center font-medium text-sm text-white/80 bg-white/5 hover:bg-white/10"
            >
              Вход в аккаунт
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-1 w-full">
        {/* Left Desktop Sidebar Rail (exact match Screen 2) */}
        <aside className="hidden lg:flex flex-col items-center w-14 shrink-0 bg-[#0e0f13] border-r border-white/5 py-3 select-none">
          <a
            href="#starda-drawer"
            className="w-10 h-10 mb-4 rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition"
            title="Меню"
          >
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          <div className="flex flex-col gap-3.5">
            <a
              href={REF_URL}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-[#e52338] bg-[#e52338]/10 hover:bg-[#e52338]/20 transition"
              title="Бонусы"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 12v10H4V12h16m1-7h-3.2c.7-.8 1.2-1.8 1.2-3 0-2.2-1.8-4-4-4-1.9 0-3.5 1.3-3.9 3.1h-.2C10.5-.2 8.9-1.5 7-1.5 4.8-1.5 3 .3 3 2.5c0 1.2.5 2.2 1.2 3H1v4h22V5h-2z" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition"
              title="Промоакции"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.5 4c-.3 0-.5.1-.7.3L15 8.6V4c0-.6-.4-1-1-1s-1 .4-1 1v4.6L8.2 4.3c-.2-.2-.4-.3-.7-.3-.6 0-1 .4-1 1v14c0 .6.4 1 1 1 .3 0 .5-.1.7-.3L13 15.4V20c0 .6.4 1 1 1s1-.4 1-1v-4.6l4.8 4.3c.2.2.4.3.7.3.6 0 1-.4 1-1V5c0-.6-.4-1-1-1z" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition"
              title="VIP"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition"
              title="Избранное"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition"
              title="Слоты"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <circle cx="8" cy="16" r="4" />
                <circle cx="16" cy="16" r="4" />
                <path d="M8 12c0-4 4-8 8-8v2c-3 0-6 3-6 6h-2z" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition"
              title="Спорт"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 1 0 18M3 12a9 9 0 0 1 18 0" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition"
              title="Поддержка"
            >
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
              </svg>
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header Navbar (exact match Screen 2) */}
          <header className="sticky top-0 z-30 bg-[#0e0f13] border-b border-white/5 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Mobile Burger Toggle */}
              <a
                href="#starda-drawer"
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white/80 hover:bg-white/5"
                aria-label="Открыть меню"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </a>

              {/* Logo */}
              <a href={REF_URL} className="flex items-center gap-1 text-2xl sm:text-3xl font-black tracking-wider text-white">
                <span className="text-[#e52338]">STAR</span>DA
              </a>

              {/* Casino / Sports Switcher Tabs */}
              <div className="hidden sm:flex items-center gap-1 bg-[#16171d] p-1 rounded-lg border border-white/5 text-xs font-semibold">
                <a
                  href={REF_URL}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#22242c] text-white shadow-sm"
                >
                  <span className="text-[#e52338]">♠</span>
                  <span>Казино</span>
                </a>
                <a
                  href={REF_URL}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-white/60 hover:text-white transition"
                >
                  <span>⚽</span>
                  <span>Спорт</span>
                </a>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-2">
              <a
                href={REF_URL}
                className="w-full bg-[#16171d] border border-white/5 hover:border-white/15 rounded-lg px-3.5 py-2 text-xs text-white/50 flex items-center gap-2 transition"
              >
                <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="truncate">Название игры или провайдера</span>
              </a>
            </div>

            {/* Right Buttons: Login & Registration */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={REF_URL}
                className="p-2 sm:px-3 sm:py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition flex items-center gap-1.5 text-xs font-semibold"
                title="Войти"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Вход</span>
              </a>

              <a
                href={REF_URL}
                className="std4-btn-red px-3.5 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase shadow-md shadow-red-900/30"
              >
                Регистрация
              </a>
            </div>
          </header>

          {/* Secondary Subnav (Categories: Слоты, Live-казино, Спорт, Instant Games, Bonus Buy, Настольные, Темы, VPN) */}
          <nav className="bg-[#0c0d10] border-b border-white/5 px-3 sm:px-6 py-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 min-w-max text-xs font-medium text-white/70">
              <a href={REF_URL} className="px-3 py-1.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/15 transition">
                Слоты
              </a>
              <a href={REF_URL} className="px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition">
                Live-казино
              </a>
              <a href={REF_URL} className="px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition">
                Спорт
              </a>
              <a href={REF_URL} className="px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition">
                Instant Games
              </a>
              <a href={REF_URL} className="px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition">
                Bonus Buy
              </a>
              <a href={REF_URL} className="px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition">
                Настольные
              </a>
              <a href={REF_URL} className="px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition">
                Темы
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#e52338]/40 bg-[#e52338]/10 text-white font-semibold hover:bg-[#e52338]/20 transition"
              >
                <span className="w-2 h-2 rounded-full bg-[#e52338] animate-pulse" />
                <span>VPN</span>
              </a>
            </div>
          </nav>

          {/* MAIN CONTAINER */}
          <main className="std4-container px-3 sm:px-6 py-4 sm:py-6 flex flex-col gap-6 sm:gap-8">
            {/* HERO BANNER (exact replication Screen 2) */}
            <section className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1b1c24] via-[#14151a] to-[#0d0e12] border border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(229,35,56,0.18),transparent_60%)] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center p-6 sm:p-10 gap-6 lg:gap-8">
                {/* Hero Left Content */}
                <div className="lg:col-span-6 flex flex-col items-start gap-3 sm:gap-4">
                  <span className="text-sm sm:text-base font-semibold uppercase tracking-wider text-white/80">
                    Welcome Bonus
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                    100% <span className="text-[#e52338]">+</span> 500 FS
                  </h1>
                  <p className="text-base sm:text-lg text-white/70 font-medium">
                    На твой 1-й депозит
                  </p>

                  <a
                    href={REF_URL}
                    className="std4-btn-red mt-2 sm:mt-4 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-extrabold tracking-wider uppercase shadow-xl shadow-red-900/40 inline-flex items-center gap-2"
                  >
                    <span>ПОЛУЧИТЬ БОНУС</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </a>
                </div>

                {/* Hero Right Visuals: Glowing Gift Box, Chips, Dice & Payment Strip */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
                  <div className="relative w-full max-w-[460px] aspect-[16/10] sm:aspect-[16/10] flex items-center justify-center">
                    {/* Glowing gift box 3D illustration */}
                    <img
                      src="/hero-banner.png"
                      alt="Starda Casino Welcome Bonus"
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(229,35,56,0.35)]"
                    />
                  </div>

                  {/* Payment Methods Badges Strip */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 px-3 py-2 rounded-xl bg-black/40 border border-white/5 text-[11px] font-bold text-white/80">
                    <span className="px-2 py-0.5 rounded bg-[#1f222e] text-[#42b549]">СБП</span>
                    <span className="px-2 py-0.5 rounded bg-[#1f222e] text-[#21a038]">SberPay</span>
                    <span className="px-2 py-0.5 rounded bg-[#1f222e] text-[#ffdd2d]">ЮPay</span>
                    <span className="px-2 py-0.5 rounded bg-[#1f222e] text-[#1a1f71]">VISA</span>
                    <span className="px-2 py-0.5 rounded bg-[#1f222e] text-[#eb001b]">Mastercard</span>
                    <span className="px-2 py-0.5 rounded bg-[#1f222e] text-[#009b48]">МИР</span>
                    <span className="px-2 py-0.5 rounded bg-[#1f222e] text-[#f7931a]">Crypto</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3 PROMO CARDS (exact match Screen 2) */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              <a
                href={REF_URL}
                className="std4-card-dark p-4 sm:p-5 rounded-xl flex items-center justify-between gap-4 transition group cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#e52338] transition">
                    Большое количество бонусов
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Бесплатные вращения, деньги на счёт и многое другое!
                  </p>
                </div>
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#e52338]/10 border border-[#e52338]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🎁
                </div>
              </a>

              <a
                href={REF_URL}
                className="std4-card-dark p-4 sm:p-5 rounded-xl flex items-center justify-between gap-4 transition group cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#e52338] transition">
                    Стань VIP-игроком!
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Персональные бонусы, быстрые выплаты, эксклюзивные предложения.
                  </p>
                </div>
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#e52338]/10 border border-[#e52338]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  👑
                </div>
              </a>

              <a
                href={REF_URL}
                className="std4-card-dark p-4 sm:p-5 rounded-xl flex items-center justify-between gap-4 transition group cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#e52338] transition">
                    Промоакции каждый день!
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Крупные призы в турнирах и акциях ждут тебя.
                  </p>
                </div>
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#e52338]/10 border border-[#e52338]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🎟️
                </div>
              </a>
            </section>

            {/* "ТОЛЬКО НА STARDA" SLOTS CAROUSEL / GRID (exact match Screen 2) */}
            <section className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-black tracking-wider uppercase text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e52338]" />
                  <span>ТОЛЬКО НА STARDA</span>
                </h2>
                <a
                  href={REF_URL}
                  className="text-xs sm:text-sm font-semibold text-[#e52338] hover:underline flex items-center gap-1"
                >
                  <span>Показать все</span>
                  <span>&gt;</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {[
                  { name: 'Fruits Beyond Craze', provider: 'Pragmatic', bg: 'from-purple-900 via-indigo-950 to-black', badge: '53.06x', art: '🍇🍒🍋' },
                  { name: 'Hot Rocket Mega', provider: 'Spribe', bg: 'from-red-900 via-orange-950 to-black', badge: 'TOP', art: '🚀💥🔥' },
                  { name: 'RIP City', provider: 'Hacksaw', bg: 'from-zinc-800 via-neutral-900 to-black', badge: 'HOT', art: '🐱💀⚡' },
                  { name: 'Wild Bounty Showdown', provider: 'PG Soft', bg: 'from-amber-800 via-yellow-950 to-black', badge: 'NEW', art: '🤠🔫💰' },
                  { name: 'Wicked Rich', provider: 'NetEnt', bg: 'from-emerald-900 via-teal-950 to-black', badge: 'JACKPOT', art: '🧙‍♀️🔮✨' },
                  { name: '25 Coins', provider: 'Wazdan', bg: 'from-yellow-700 via-amber-950 to-black', badge: '192K руб.', art: '🪙👑💎' },
                ].map((slot, idx) => (
                  <a
                    key={idx}
                    href={REF_URL}
                    className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#16171d] border border-white/5 hover:border-[#e52338]/50 transition flex flex-col justify-between p-3 shadow-lg"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-t ${slot.bg} opacity-90 group-hover:scale-105 transition duration-300`} />
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase">{slot.provider}</span>
                      <span className="px-1.5 py-0.5 rounded bg-black/70 text-[10px] font-black text-[#e52338] border border-[#e52338]/30">
                        {slot.badge}
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center justify-center my-auto text-3xl group-hover:scale-125 transition duration-300 filter drop-shadow">
                      {slot.art}
                    </div>

                    <div className="relative z-10 flex flex-col gap-0.5 pt-2 border-t border-white/5">
                      <span className="text-xs font-bold text-white leading-tight group-hover:text-[#e52338] transition">
                        {slot.name}
                      </span>
                    </div>

                    {/* Play Button Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center z-20 backdrop-blur-[2px]">
                      <span className="std4-btn-red px-4 py-2 rounded-lg text-xs font-extrabold uppercase shadow-lg tracking-wider">
                        Играть
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* SEO ARTICLE: "простыня текста с ключами на 300-400 слов" */}
            <article className="std4-card-dark rounded-2xl p-6 sm:p-10 flex flex-col gap-6 text-sm sm:text-base leading-relaxed text-white/80 border border-white/5">
              <section id="official-site" className="flex flex-col gap-2.5">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Starda Casino официальный сайт: вход, зеркало и регистрация
                </h2>
                <p>
                  Добро пожаловать на Starda Casino официальный сайт — современный азартный портал для ценителей честной игры, сертифицированного софта и быстрых выплат. Оригинальный Starda Casino официальный ресурс предлагает более 5000 лицензионных слотов от ведущих мировых провайдеров, настольные игры и Live-столы. Каждый новый пользователь Starda Casino получает щедрый приветственный бонусный пакет 100% и до 500 фриспинов на первый депозит. Проверенное Starda Казино обеспечивает надежную защиту персональных данных, честный вывод средств и круглосуточную техническую поддержку для каждого гостя. Популярное Starda Казино создает лучшие условия для комфортного гейминга.
                </p>
              </section>

              <section id="official" className="flex flex-col gap-2.5">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Старда Казино официальный сайт и рабочее зеркало
                </h2>
                <p>
                  Посещая Старда Казино официальный сайт, игроки получают доступ к безопасной платформе с международной лицензией и прозрачными условиями. Официальный Старда Казино официальный портал гарантирует честную отдачу сертифицированных аппаратов и моментальное пополнение счета через СБП, банковские карты и криптовалюту. Авторитетное Старда Казино регулярно проводит турниры с крупными призовыми фондами, а выгодная программа лояльности позволяет активным участникам возвращать до 10% кэшбэка еженедельно. Надежный Старда Казино официальный сайт открывает доступ к лучшим слотам рунета.
                </p>
              </section>

              <section id="working-mirror" className="flex flex-col gap-2.5">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Актуальное Старда Казино зеркало рабочее на сегодня
                </h2>
                <p>
                  Если основной домен заблокирован интернет-провайдером, используйте актуальное Starda Casino зеркало для мгновенного входа в личный кабинет. Надежное Старда Казино зеркало полностью синхронизировано с единой базой данных, сохраняя баланс счета, бонусы и историю ставок. Наше официальное Старда Казино зеркало рабочее функционирует без задержек и не требует использования сторонних VPN программ, обеспечивая стабильное подключение 24/7. Переходите через проверенное Starda Casino зеркало и рабочее Старда Казино зеркало, чтобы продолжать игру без ограничений в любое время суток.
                </p>
              </section>

              <section id="play-online" className="flex flex-col gap-2.5">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  В Старда Казино играть онлайн: слоты, джекпоты и бонусы
                </h2>
                <p>
                  Каждый азартный игрок может в Старда Казино играть онлайн бесплатно в демонстрационном режиме или со ставками на реальные деньги с быстрыми выплатами. Чтобы в Старда Казино играть с максимальной отдачей, активируйте эксклюзивные промокоды и забирайте дополнительные фриспины. Запуская Старда Казино онлайн, вы погружаетесь в атмосферу настоящего казино с высокими шансами на солидный джекпот. Пользователи предпочитают в Starda Casino играть прямо со смартфона — адаптивная мобильная версия открывается быстро на любых устройствах. Начните в Starda Casino играть уже сегодня и выигрывайте крупные призы в Старда Казино онлайн!
                </p>
              </section>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={REF_URL}
                  className="std4-btn-red px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-red-900/40"
                >
                  Перейти в Starda Casino
                </a>
              </div>
            </article>

            {/* FOOTER */}
            <footer className="pt-6 pb-20 sm:pb-16 flex flex-col gap-6 border-t border-white/5 text-xs text-white/50">
              {/* Hashtags Built from Keyword Phrases for On-site Navigation */}
              <div className="flex flex-col gap-2.5">
                <span className="font-semibold uppercase tracking-wider text-white/60">Теги и разделы:</span>
                <div className="flex flex-wrap gap-2">
                  <a href="#official-site" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #starda-casino-официальный-сайт
                  </a>
                  <a href="#official-site" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #starda-casino
                  </a>
                  <a href="#working-mirror" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #starda-casino-зеркало
                  </a>
                  <a href="#official" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #старда-казино-официальный
                  </a>
                  <a href="#official" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #старда-казино
                  </a>
                  <a href="#official-site" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #starda-казино
                  </a>
                  <a href="#working-mirror" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #старда-казино-зеркало-рабочее
                  </a>
                  <a href="#play-online" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #старда-казино-играть
                  </a>
                  <a href="#play-online" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #старда-казино-онлайн
                  </a>
                  <a href="#play-online" className="px-2.5 py-1 rounded-md bg-[#16171d] hover:text-[#e52338] transition border border-white/5">
                    #starda-casino-играть
                  </a>
                </div>
              </div>

              {/* Responsible Gaming & License Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center font-bold text-white/70">18+</span>
                  <span>Лицензия Curaçao eGaming № 8048/JAZ. Ответственная игра.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>SSL 256-bit Secure</span>
                  <span>•</span>
                  <span>Provably Fair</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40">
                <p>© 2026 Starda Casino. Все права защищены. Официальное зеркало.</p>
                <p>Адрес сайта: https://starda4casino.vercel.app</p>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* FLOATING LIVE WINNERS TICKER ("Сейчас выигрывают" - exact replication Screen 2) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#121318]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-between gap-3 text-xs select-none">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-white/10 shrink-0 text-[#e52338] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#e52338] animate-ping" />
            <span>Сейчас выигрывают</span>
          </div>

          {[
            { user: 'je***na', amount: '5 936 руб.', game: 'Cash The Gold', icon: '💰' },
            { user: 'Serg*****74sl', amount: '3 200 руб.', game: 'Lucky Fest Hold...', icon: '🏮' },
            { user: 'Nik', amount: '3 835 руб.', game: 'Grug Make Fire', icon: '🔥' },
            { user: 'Abua*******0000', amount: '25 469 руб.', game: 'Hot Rocket Mega...', icon: '🚀' },
            { user: 'Ku****ss', amount: '28 038 руб.', game: 'RIP City', icon: '🐱' },
            { user: 'L**ya', amount: '2 070 руб.', game: 'Wild Bounty Show...', icon: '🤠' },
            { user: 'S**u', amount: '192 817 руб.', game: '25 Coins', icon: '🪙' },
          ].map((win, i) => (
            <a
              key={i}
              href={REF_URL}
              className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition shrink-0"
            >
              <span className="text-base">{win.icon}</span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] text-white/50">{win.user}</span>
                <span className="font-bold text-[#42b549]">{win.amount}</span>
              </div>
              <span className="hidden md:inline text-[10px] text-white/40 pl-1">{win.game}</span>
            </a>
          ))}
        </div>

        <a
          href={REF_URL}
          className="shrink-0 px-2 py-1 text-white/40 hover:text-white"
          title="Скрыть"
        >
          ✕
        </a>
      </div>
    </div>
  )
}
