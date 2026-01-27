'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Calendar, User, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'LPK Binawan Membuka Program Pelatihan Baru untuk Industri Otomotif',
    excerpt: 'Kami dengan bangga mengumumkan peluncuran program pelatihan terbaru yang dirancang khusus untuk memenuhi kebutuhan industri otomotif modern.',
    date: '15 Januari 2024',
    author: 'Admin',
    category: 'Program',
  },
  {
    id: 2,
    title: 'Kerjasama Strategis dengan 5 Perusahaan Besar di Jepang',
    excerpt: 'LPK Binawan telah menjalin kerjasama dengan perusahaan terkemuka di Jepang untuk meningkatkan peluang penempatan kerja.',
    date: '10 Januari 2024',
    author: 'Admin',
    category: 'Partnership',
  },
  {
    id: 3,
    title: 'Pencapaian Penempatan Kerja 2023 Mencapai 92%',
    excerpt: 'Tahun 2023 menjadi tahun yang luar biasa bagi LPK Binawan dengan tingkat penempatan kerja mencapai angka 92%.',
    date: '5 Januari 2024',
    author: 'Admin',
    category: 'Pencapaian',
  },
  {
    id: 4,
    title: 'Fasilitas Training Terbaru Dilengkapi Teknologi AI',
    excerpt: 'Upgrade fasilitas training kami dengan teknologi terdepan untuk memberikan pengalaman belajar terbaik kepada peserta.',
    date: '28 Desember 2023',
    author: 'Admin',
    category: 'Fasilitas',
  },
  {
    id: 5,
    title: 'Alumni LPK Binawan Raih Penghargaan di Jepang',
    excerpt: 'Beberapa alumni program kami telah meraih penghargaan prestasi dari perusahaan tempat mereka bekerja di Jepang.',
    date: '20 Desember 2023',
    author: 'Admin',
    category: 'Alumni',
  },
  {
    id: 6,
    title: 'Webinar Gratis: Persiapan Bekerja di Luar Negeri',
    excerpt: 'Ikuti webinar interaktif kami tentang tips dan trik persiapan bekerja di luar negeri bersama para expert.',
    date: '15 Desember 2023',
    author: 'Admin',
    category: 'Event',
  },
];

export default function NewsPage() {
  return (
    <div className="w-full">
      <Navbar lang="id" />

      {/* Header Section */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <Image
          src="/news-header.jpg"
          alt="News header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita & Artikel</h1>
            <p className="text-lg md:text-xl">Informasi terkini dari LPK Binawan</p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/id/news/${article.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <Image
                  src={`/api/placeholder?w=400&h=200&text=Artikel%20${article.id}`}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer lang="id" />
    </div>
  );
}
