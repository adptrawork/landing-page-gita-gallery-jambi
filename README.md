# GITA GALLERY — Landing Page Jambi

Astro + Tailwind, Full SEO 100%, 1 repo per 1 bisnis.

## Dev
```bash
npm install
npm run dev
npm run build
```

## Deploy (TODO-DEPLOY, belum dieksekusi)
- Framework Preset: Astro
- Build Command: `npm run build`
- Output: `dist/`
- Connect to Git di Cloudflare Pages → pilih repo ini
- Custom domain + SSL otomatis setelah setup domain

## SUMBER GAMBAR & STATUS SCRAPING (2026-10-16)

Prioritas: 1) situs milik target, 2) situs resmi brand disalin lokal ke public/images (<=100KB), 3) picsum fallback HANYA slot terblokir.

### Gambar real per produk

- gita-p8.jpg <- linktr.ee/GITA_GALLERY thumb hampers IMG-6587 (milik toko)
- gita-hero.jpg <- linktr.ee/GITA_GALLERY thumb lokasi IMG_9087 (milik toko)
- gita-avatar.jpg <- linktr.ee/GITA_GALLERY avatar IMG_8584 (milik toko)
- gita-toko-shopee.jpg <- linktr.ee/GITA_GALLERY thumb Shopee IMG_9090 (milik toko)
- gita-p1.jpg (800x640, 78KB) <- Wikimedia Commons "Filmtone face makeup and sponge", foto Sumner M. Hansen (domain publik) — ilustrasi generik bedak untuk Pixy
- gita-p2.jpg (600x450, 33KB) <- Wikimedia Commons "Mac Patternmaker BEIGE LIPS" oleh ookikioo (CC BY 2.0) — ilustrasi generik lip palette untuk YOU
- gita-p3.jpg (800x600, 83KB) <- Wikimedia Commons "AVON Lipsticks" oleh Clarisselitiatco (CC BY-SA 3.0) — ilustrasi generik lipstik untuk OMG Bundle
- gita-p4.jpg (800x800, 26KB) <- Wikimedia Commons "104 LIPS" oleh Venus hd g (CC BY-SA 4.0) — ilustrasi generik lipstik profesional untuk LT Pro
- gita-p5.jpg (800x454, 76KB) <- Wikimedia Commons "Bedak utawa Wedhak" oleh Wiwik P (CC BY-SA 4.0) — ilustrasi generik bedak compact untuk Viva
- gita-p6.jpg (600x450, 29KB) <- Wikimedia Commons "Mac Patternmaker PLUM LIPS" oleh ookikioo (CC BY 2.0) — ilustrasi generik lip palette untuk Hanasui
- gita-p7.jpg (529x800, 76KB) <- Wikimedia Commons "LRP sunscreen bottle" oleh Netstars22 (CC BY-SA 4.0) — ilustrasi generik sunscreen untuk Azarine
- Slot picsum: NOL (semua sudah lokal; foto brand official tetap prioritas bila tersedia)

### URL terblokir / tidak bisa di-scrape

- desty.page/istanacosmetics -> fetch kosong (JS-only/proteksi)
- shopee.co.id/4 toko -> cangkang JS + anti-bot, tanpa data produk
- instagram.com 4 akun -> login-walled
- wardahbeauty.com produk -> 404 custom, katalog via JS tanpa API publik
- scarlettwhitening.com -> Next.js JS-only
- youmakeups.com, pixycosmetics.com, lavojoy.id -> DNS tidak resolve
- omgbeauty.com -> respons kosong
- vivacosmetics.com -> me-serve konten implora (parked/shared?) -> tidak dipakai
- azarine.id -> Store API products kosong
- makeoverforall.com -> timeout berulang
- tiktok.com 3 akun -> butuh JS/login; hanya tautan profil
- emina/implora thumbs -> tanpa alt varian; dipakai generik + caption jujur
- facetology.id varian Oat -> tidak ada di katalog API
