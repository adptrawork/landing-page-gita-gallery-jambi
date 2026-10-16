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
  ogImage: '/images/gita-hero.jpg',
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
  { name: 'Pixy Series', price: 'Rp 30–70rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/gita-1/800/600', alt: 'Ilustrasi placeholder produk Pixy — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'YOU Series', price: 'Rp 50–110rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/gita-2/800/600', alt: 'Ilustrasi placeholder produk YOU — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'OMG Bundle Series', price: 'Rp 20–35rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/gita-3/800/600', alt: 'Ilustrasi placeholder bundle OMG — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'LT Pro Series', price: 'Rp 110–140rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/gita-4/800/600', alt: 'Ilustrasi placeholder LT Pro — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Viva Series', price: 'Rp 8–25rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/gita-5/800/600', alt: 'Ilustrasi placeholder Viva — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Hanasui Series', price: 'Rp 20–28rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/gita-6/800/600', alt: 'Ilustrasi placeholder Hanasui — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Azarine Series', price: 'Rp 35–75rb', badge: 'Estimasi', stock: 'Tanya Stok', image: 'https://picsum.photos/seed/gita-7/800/600', alt: 'Ilustrasi placeholder Azarine — ganti foto asli', w: 800, h: 600, source: 'Foto placeholder — ganti foto asli' },
  { name: 'Hampers & Parsel', price: 'Rp 50–250rb', badge: 'Teruji', stock: 'Tanya Stok', image: '/images/gita-p8.jpg', alt: 'Layanan hampers dan parsel Gita Gallery — foto resmi toko', w: 100, h: 100, source: 'Sumber: linktr.ee/GITA_GALLERY (official)' },
];

export const promos = [
  { title: 'Hampers & Parsel Custom', desc: 'Pesan hampers untuk wisuda, lamaran & Lebaran via WA khusus hampers.', status: 'Terverifikasi — layanan hampers tersedia.' },
  { title: 'Join Reseller Gita', desc: 'Dapatkan harga grosir dengan gabung reseller via WA grosir.', status: 'Terverifikasi — program reseller tersedia.' },
  { title: 'Order via GoFood', desc: 'Mager keluar? Cari Gita Gallery di GoFood untuk order cepat.', status: 'Terverifikasi — tersedia di GoFood.' },
];
