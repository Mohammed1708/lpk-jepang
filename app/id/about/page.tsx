'use client';

import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Target, Eye, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full">
      <Navbar lang='id' />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src="/Assets/belajar.jpg"
          alt="About hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
            <p className="text-lg md:text-xl">Perjalanan menuju keunggulan dalam pengembangan talenta</p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Kisah Kami
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6 leading-relaxed">
            LPK Binawan didirikan pada tahun 2003 dengan visi sederhana namun kuat: menciptakan jembatan antara talenta lokal Indonesia dengan peluang kerja internasional. Kami memahami bahwa pengembangan sumber daya manusia adalah kunci kesuksesan jangka panjang bagi setiap organisasi.
          </p>
          <p className="mb-6 leading-relaxed">
            Selama lebih dari dua dekade, kami telah berkembang menjadi lembaga pelatihan kerja terpercaya yang telah melatih ribuan individu dan membantu ratusan perusahaan menemukan talenta terbaik. Komitmen kami terhadap keunggulan pendidikan dan penempatan kerja telah menghasilkan tingkat kepuasan pelanggan dan alumni yang luar biasa tinggi.
          </p>
          <p className="mb-6 leading-relaxed">
            Perjalanan kami dimulai dengan tim kecil yang berdedikasi, dan kini kami memiliki fasilitas modern, instruktur bersertifikat internasional, dan jaringan global dengan partner terkemuka di berbagai industri. Setiap langkah pertumbuhan kami dipandu oleh nilai-nilai inti: integritas, inovasi, dan komitmen terhadap kesuksesan klien dan peserta didik kami.
          </p>
          <p className="leading-relaxed">
            Hari ini, LPK Binawan bangga menjadi mitra pilihan bagi perusahaan multinasional yang mencari talenta berkualitas dari Indonesia, khususnya untuk pasar Jepang dan negara-negara Asia lainnya.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Pendiri & Kepemimpinan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/bod/ceo.png"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Said Saleh Alwaini
              </h3>
              <p className="text-primary font-semibold text-lg mb-6">
                Pendiri & CEO Binawan Group
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dengan pengalaman lebih dari 25 tahun di industri pelatihan dan pengembangan sumber daya manusia, Said Saleh Alwaini memiliki visi yang jelas untuk memberdayakan talenta Indonesia agar dapat bersaing di panggung global.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Latar Belakang Pendidikan</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Master in Human Resource Development - University of Tokyo</li>
                    <li>• Bachelor in Education - Universitas Indonesia</li>
                    <li>• Sertifikasi International Training Specialist</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Penghargaan</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Best Training Institution Award 2022</li>
                    <li>• Indonesian Export Excellence Award 2021</li>
                    <li>• Global Talent Development Champion 2020</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Visi & Misi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the leading company in Indonesia, empowering and developing the country’s manpower to excel globally, while fostering sustainable partnerships with international employers.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>• Pengembangan Tenaga Kerja</p>
              <p>• Rekrutmen Etis</p>
              <p>• Dukungan Holistik</p>
              <p>• Kolaborasi dengan Institusi</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Nilai-Nilai Inti Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Integritas',
                description: 'Kami berkomitmen pada transparansi dan kejujuran dalam setiap interaksi',
              },
              {
                icon: Zap,
                title: 'Inovasi',
                description: 'Kami terus mengembangkan program dan metode pembelajaran terbaru',
              },
              {
                icon: Target,
                title: 'Keunggulan',
                description: 'Kami mengejar standar tertinggi dalam setiap aspek operasi kami',
              },
              {
                icon: Eye,
                title: 'Kepedulian',
                description: 'Kami peduli dengan kesuksesan jangka panjang peserta didik kami',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer lang='id' />
    </div>
  );
}
