'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function DecisionPage() {
  const router = useRouter();

  const handleEmployerClick = () => {
    router.push('/jp');
  };

  const handleCandidateClick = () => {
    router.push('/id');
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
        }}
      />

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16 text-balance">
          SELAMAT DATANG DI<br />
          <span className="text-primary-foreground">LPK BINAWAN</span>
        </h1>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-2xl">
          {/* Employer Button */}
          <Button
            onClick={handleEmployerClick}
            className="flex-1 py-6 md:py-8 px-8 text-lg md:text-xl font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Perusahaan Pemberi Kerja
          </Button>

          {/* Candidate Button */}
          <Button
            onClick={handleCandidateClick}
            className="flex-1 py-6 md:py-8 px-8 text-lg md:text-xl font-semibold rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Pendaftaran Kandidat Baru
          </Button>
        </div>
      </div>
    </main>
  );
}
