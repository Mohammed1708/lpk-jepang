import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  lang: 'id' | 'jp';
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const content = lang === 'id' ? {
    about: 'Pusat pelatihan kerja terkemuka menghubungkan talenta dengan peluang',
    quickLinks: 'Tautan Cepat',
    services: 'Layanan',
    contact: 'Hubungi Kami',
    home: 'Beranda',
    aboutUs: 'Tentang Kami',
    news: 'Berita',
    contactUs: 'Hubungi Kami',
    talentRecruitment: 'Rekrutmen Talenta',
    training: 'Program Pelatihan',
    consultation: 'Konsultasi',
    career: 'Pengembangan Karir',
    rights: 'Hak Cipta',
  } : {
    about: ' International Jobs Training Center',
    quickLinks: 'クイックリンク',
    services: 'サービス',
    contact: 'お問い合わせ',
    home: 'ホーム',
    aboutUs: '私たちについて',
    news: 'ニュース',
    contactUs: 'お問い合わせ',
    talentRecruitment: '人材採用',
    training: '研修プログラム',
    consultation: 'コンサルティング',
    career: 'キャリア開発',
    rights: '著作権',
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">LPK BINAWAN</h3>
            <p className="text-gray-400 text-sm mb-4">
              {content.about}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${lang}/`} className="text-gray-400 hover:text-primary transition">
                  {content.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-gray-400 hover:text-primary transition">
                  {content.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/news`} className="text-gray-400 hover:text-primary transition">
                  {content.news}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-400 hover:text-primary transition">
                  {content.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.services}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  {content.talentRecruitment}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  {content.training}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  {content.consultation}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  {content.career}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-400">info@lpkbinawan.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-400">+62 21 XXXX XXXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-gray-400">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} LPK BINAWAN. {content.rights} reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
