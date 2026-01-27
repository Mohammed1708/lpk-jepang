'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play, Users, Briefcase, TrendingUp, Award, Target } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function EmployerHome() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="w-full">
      <Navbar lang='id' />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/perusahaan-hero.jpg"
          alt="Building hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Selamat Datang
          </h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-80 md:h-96">
            <Image
              src="/ecosystem.jpg"
              alt="Company ecosystem"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Mengapa Berkolaborasi Dengan Kami
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Talenta Berkualitas</h3>
                <p className="text-sm text-gray-600">
                  Kandidat terlatih dan bersertifikat
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Standar Internasional</h3>
                <p className="text-sm text-gray-600">
                  Sertifikasi dan pelatihan terstandar
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pengalaman Profesional</h3>
                <p className="text-sm text-gray-600">
                  Puluhan tahun melayani industri
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pertumbuhan Bisnis</h3>
                <p className="text-sm text-gray-600">
                  Solusi untuk pertumbuhan perusahaan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Mengapa Memilih LPK Binawan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Program Pelatihan Komprehensif</h4>
                    <p className="text-gray-600 text-sm">Disiapkan khusus untuk kebutuhan industri</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dukungan Penuh dari Awal</h4>
                    <p className="text-gray-600 text-sm">Tim profesional siap membantu implementasi</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jaringan Global</h4>
                    <p className="text-gray-600 text-sm">Terhubung dengan partner di berbagai negara</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hasil yang Terukur</h4>
                    <p className="text-gray-600 text-sm">ROI yang jelas dan transparansi penuh</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Statistik Kami</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Kepuasan Klien</span>
                    <span className="text-primary font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Tingkat Penempatan</span>
                    <span className="text-primary font-bold">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Tahun Pengalaman</span>
                    <span className="text-primary font-bold">20+</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Jaringan Kolaborasi Terbaru
        </h2>
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/japan-map.jpg"
            alt="Japan collaboration map"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-lg md:text-xl font-semibold">
                Melayani Kolaborasi di 15+ Kota di Jepang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Program Unggulan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((program) => (
              <div
                key={program}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30 group-hover:scale-110 transition-transform duration-300">
                      {program}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Program {program === 1 ? 'Dasar' : program === 2 ? 'Menengah' : 'Lanjutan'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Durasi: 3-6 bulan</li>
                    <li>✓ Sertifikasi internasional</li>
                    <li>✓ Magang berbayar</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Profil LPK Binawan
        </h2>
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-full h-80 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center group-hover:bg-gray-900/70 transition-colors">
              <button
                onClick={() => setVideoOpen(true)}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
              >
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </button>
            </div>
            <video
              className="w-full h-full object-cover"
              poster="/perusahaan-hero.jpg"
            />
          </div>
          <p className="text-gray-700 text-center max-w-2xl leading-relaxed">
            Saksikan perjalanan kami dalam mengembangkan talenta terbaik untuk industri global. Video ini menampilkan testimoni klien, fasilitas training, dan kesuksesan penempatan kerja yang kami capai.
          </p>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Testimoni Klien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Hiroshi Yamamoto',
                company: 'Tech Solutions Japan',
                quote: 'Kualitas kandidat dari LPK Binawan sangat memuaskan. Tim mereka profesional dan responsif.',
              },
              {
                name: 'Keiko Tanaka',
                company: 'Manufacturing Corp',
                quote: 'Kami telah bekerja sama selama 5 tahun. Tingkat retensi karyawan kami sangat tinggi.',
              },
              {
                name: 'Yuki Sato',
                company: 'Global Services Inc',
                quote: 'Proses rekrutmen yang transparan dan efisien. Rekomendasi untuk semua perusahaan di Jepang.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang='id'/>
    </div>
  );
}
