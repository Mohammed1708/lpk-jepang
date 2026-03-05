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
            Perjalanan Binawan berawal dari satu tujuan memberdayakan tenaga kerja Indonesia agar mampu bersaing di kancah global. Kami telah menjadi jembatan lebih dari 130.000 tenaga profesional Indonesia untuk berkarier di luar negeri, menghadirkan kualitas, dedikasi, dan semangat kerja yang menjadi kebanggaan bangsa.
          </p>
          <p className="mb-6 leading-relaxed">
            Keberhasilan ini menarik perhatian Menteri Ketenagakerjaan, Ibu Ida Fauziah, yang kemudian mempercayakan Binawan untuk membuka pasar tenaga kerja Indonesia di Jepang. Langkah besar ini bukan hanya tentang memperluas peluang kerja, tetapi juga tentang mempersiapkan generasi pekerja yang memiliki keterampilan unggul dan memahami budaya kerja Jepang yang disiplin serta berintegritas tinggi.
          </p>
          <p className="mb-6 leading-relaxed">
            Dengan ekosistem terintegrasi, mulai dari pelatihan bahasa dan budaya, sertifikasi kompetensi, hingga penempatan kerja yang terarah. Binawan berkomitmen menghadirkan tenaga kerja yang siap menghadapi tantangan global. Kami percaya, setiap individu yang berangkat bersama Binawan bukan hanya membawa kemampuan, tetapi juga harapan dan nama baik Indonesia ke panggung dunia.
          </p>
          <p className="mb-6 leading-relaxed">
           Sebagai pelopor di industri dengan pengalaman lebih dari 48 tahun yang berfokus pada layanan dan pengembangan sumber daya manusia, Binawan telah memperoleh keahlian yang tak ternilai dalam mengembangkan dan menempatkan talenta Indonesia untuk memenuhi permintaan pasar kerja global yang terus meningkat.
          </p>
          <p className='mb-6 leadeing-relaxed'>
            Kami senantiasa berupaya memastikan kesesuaian antara profil talenta Indonesia dengan standar dan kualifikasi yang diakui secara internasional, yang sering kali melibatkan peningkatan keterampilan dan kompetensi mereka.
          </p>
          <p className='mb-6 leading-relaxed'>
            Sebagai wujud komitmen tersebut, kami telah mendirikan berbagai lembaga pelatihan, pendidikan vokasi, dan institusi pendidikan di bawah naungan Yayasan Binawan. Melalui inisiatif ini, kami berhasil menjadi pelopor dalam penempatan tenaga kerja Indonesia ke pasar kerja global di berbagai sektor yang sebelumnya sulit dijangkau, termasuk Timur Tengah, Eropa, Asia Timur, dan Australia.
          </p>  
          <p className='mb-6 leading-relaxed'>
            Dengan terus mengarahkan langkah menuju visi kami untuk menjadi global hub yang terpercaya di pasar kerja internasional, kami siap membantu Anda bertumbuh melalui pemanfaatan jaringan besar profesional Indonesia yang berkualitas.
          </p>
          <p className='mb-6 leading-relaxed position-left'>
            - Said Saleh Alwaini, CEO
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
