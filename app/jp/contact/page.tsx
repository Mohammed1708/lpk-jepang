'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full">
      <Navbar lang="jp" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-lg md:text-xl text-white/90">
            プログラムとサービスについてのご質問にお答えします
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">メール</h3>
            <p className="text-gray-600 mb-4">一般的なご質問はメールでお問い合わせください</p>
            <a
              href="mailto:info@lpkbinawan.com"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              info@lpkbinawan.com
              <span>→</span>
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">電話</h3>
            <p className="text-gray-600 mb-4">迅速なサポートのためお電話ください</p>
            <a
              href="tel:+62216000000"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              +62 21 6000 0000
              <span>→</span>
            </a>
          </div>

          {/* Location */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">住所</h3>
            <p className="text-gray-600">Jl. Menteng Raya No. 123<br />Jakarta Pusat, 12160<br />Indonesia</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">当社の場所</h2>
          <div className="relative w-full h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3654563939347!2d106.80648!3d-6.195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e7e7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sJl.%20Menteng%20Raya%2C%20Jakarta!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* Communication Methods */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ご連絡方法</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/62216000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
            >
              <MessageCircle className="w-10 h-10 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">WhatsApp</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@lpkbinawan.com"
              className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <Mail className="w-10 h-10 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">メール</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <Facebook className="w-10 h-10 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">Facebook</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <Linkedin className="w-10 h-10 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">LinkedIn</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors group"
            >
              <Twitter className="w-10 h-10 text-sky-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">Twitter</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
            >
              <Instagram className="w-10 h-10 text-pink-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">Instagram</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+62216000000"
              className="flex flex-col items-center justify-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
            >
              <Phone className="w-10 h-10 text-red-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">電話</span>
            </a>

            {/* Address */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors group"
            >
              <MapPin className="w-10 h-10 text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-gray-900 text-sm text-center">場所</span>
            </a>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">営業時間</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">平日</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>月曜〜金曜</span>
                  <span className="font-semibold">08:00 - 18:00</span>
                </div>
                <p className="text-sm text-gray-600">休憩時間: 12:00 - 13:00</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">週末</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>土曜</span>
                  <span className="font-semibold">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>日曜</span>
                  <span className="font-semibold">休み</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang="jp" />
    </div>
  );
}
