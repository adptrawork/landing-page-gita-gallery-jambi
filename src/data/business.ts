export const business = {
  name: 'Gita Gallery Jambi',
  slug: 'gita-gallery-jambi',
  category: 'Skincare, Kosmetik & Hampers',
  city: 'Kota Jambi',
  rating: 4.2,
  reviewCount: 95,
  phone: '6281264249685',
  phoneDisplay: '0812-6424-9685 (Admin) • Grosir 0812-6424-9684',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gita+Gallery+Sei+Sawang+Jambi+Tugu+Juang',
  mapsQuery: 'Gita Gallery Sei Sawang Jambi',
  address: 'Jl Sei Sawang, seberang Local Space (patokan Tugu Juang), Kota Jambi',
  addressStatus: 'Terverifikasi',
  hours: 'Setiap hari 08.00–22.00',
  hoursStatus: 'Terverifikasi',
  instagram: 'https://www.instagram.com/gitagallery_',
  instagramLabel: '@gitagallery_ • 37.9K pengikut',
  title: 'Gita Gallery Jambi — Kosmetik, Grosir & Hampers Custom',
  description: 'Gita Gallery Jl Sei Sawang Jambi: kosmetik original, harga grosir, hampers custom & GoFood. Buka 08.00–22.00, order via WA admin & grosir.',
  canonicalPath: '/',
  ogImage: '/images/gita-hero.webp',
};

export const socials: Array<{ label: string; url: string; note: string }> = [
  { label: 'Instagram', url: 'https://www.instagram.com/gitagallery_', note: '@gitagallery_ • 37.9K — Terverifikasi' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@gitagallery', note: '@gitagallery — Terverifikasi' },
  { label: 'Shopee', url: 'https://shopee.co.id/gitakosmetikjambi', note: 'gitakosmetikjambi — Terverifikasi' },
  { label: 'WA Grosir', url: 'https://wa.me/6281264249684', note: '0812-6424-9684 khusus grosir — Terverifikasi' },
  { label: 'WA Hampers', url: 'https://wa.me/6285273088931', note: 'Order hampers & parsel — Terverifikasi' },
];

export const storeNotes: string[] = [
  'Layanan: ecer, grosir, hampers & GoFood — Terverifikasi',
  'WA Admin 0812-6424-9685 • WA Grosir 0812-6424-9684 — Terverifikasi',
  'Harga di web ini estimasi, konfirmasi via WA toko.',
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  { name: 'Pixy Series', price: 'Rp 30–70rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/gita-p1.webp', alt: 'Ilustrasi generik bedak padat dan spons makeup — bukan foto produk Pixy, konfirmasi varian via WA', w: 800, h: 640, source: 'Sumber: Wikimedia Commons — Filmtone face makeup and sponge, foto Sumner M. Hansen (domain publik)' },
  { name: 'YOU Series', price: 'Rp 50–110rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/gita-p2.webp', alt: 'Ilustrasi generik palet warna bibir makeup — bukan foto produk YOU, konfirmasi varian via WA', w: 600, h: 450, source: 'Sumber: Wikimedia Commons — Mac Patternmaker BEIGE LIPS oleh ookikioo (CC BY 2.0)' },
  { name: 'OMG Bundle Series', price: 'Rp 20–35rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/gita-p3.webp', alt: 'Ilustrasi generik deretan lipstik aneka warna — bukan foto produk OMG, konfirmasi varian via WA', w: 800, h: 600, source: 'Sumber: Wikimedia Commons — AVON Lipsticks oleh Clarisselitiatco (CC BY-SA 3.0)' },
  { name: 'LT Pro Series', price: 'Rp 110–140rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/gita-p4.webp', alt: 'Ilustrasi generik lipstik profesional — bukan foto produk LT Pro, konfirmasi varian via WA', w: 800, h: 800, source: 'Sumber: Wikimedia Commons — 104 LIPS oleh Venus hd g (CC BY-SA 4.0)' },
  { name: 'Viva Series', price: 'Rp 8–25rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/gita-p5.webp', alt: 'Ilustrasi generik bedak padat dan tabur dalam kemasan compact — bukan foto produk Viva, konfirmasi varian via WA', w: 800, h: 454, source: 'Sumber: Wikimedia Commons — Bedak utawa Wedhak oleh Wiwik P (CC BY-SA 4.0)' },
  { name: 'Hanasui Series', price: 'Rp 20–28rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/gita-p6.webp', alt: 'Ilustrasi generik palet warna bibir plum — bukan foto produk Hanasui, konfirmasi varian via WA', w: 600, h: 450, source: 'Sumber: Wikimedia Commons — Mac Patternmaker PLUM LIPS oleh ookikioo (CC BY 2.0)' },
  { name: 'Azarine Series', price: 'Rp 35–75rb', badge: 'Estimasi', stock: 'Tanya Stok', image: '/images/gita-p7.webp', alt: 'Ilustrasi generik botol sunscreen SPF 50 — bukan foto produk Azarine, konfirmasi varian via WA', w: 529, h: 800, source: 'Sumber: Wikimedia Commons — LRP sunscreen bottle oleh Netstars22 (CC BY-SA 4.0)' },
  { name: 'Hampers & Parsel', price: 'Rp 50–250rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/gita-p8.webp', alt: 'Layanan hampers dan parsel Gita Gallery — foto resmi toko', w: 100, h: 100, source: 'Sumber: linktr.ee/GITA_GALLERY (official)' },
];

export const promos = [
  { title: 'Hampers & Parsel Custom', desc: 'Pesan hampers untuk wisuda, lamaran & Lebaran via WA khusus hampers.', status: 'Terverifikasi — layanan hampers tersedia.' },
  { title: 'Join Reseller Gita', desc: 'Dapatkan harga grosir dengan gabung reseller via WA grosir.', status: 'Terverifikasi — program reseller tersedia.' },
  { title: 'Order via GoFood', desc: 'Mager keluar? Cari Gita Gallery di GoFood untuk order cepat.', status: 'Terverifikasi — tersedia di GoFood.' },
];
