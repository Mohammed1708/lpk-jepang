'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Calendar, User, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'LPK Binawan自動車業界向け新研修プログラムを開設',
    excerpt: '最新の自動車業界のニーズに対応した新しい研修プログラムの開設を誇りをもってお知らせします。',
    date: '2024年1月15日',
    author: '管理者',
    category: 'プログラム',
  },
  {
    id: 2,
    title: '日本の大手企業5社との戦略的提携',
    excerpt: 'LPK Binawanは日本の大手企業との提携を通じ、雇用機会をさらに高めています。',
    date: '2024年1月10日',
    author: '管理者',
    category: 'パートナーシップ',
  },
  {
    id: 3,
    title: '2023年の就職率が92%を達成',
    excerpt: '2023年はLPK Binawanにとって素晴らしい年となり、92%の就職率を達成しました。',
    date: '2024年1月5日',
    author: '管理者',
    category: '成就',
  },
  {
    id: 4,
    title: '最新型AI技術を備えた研修施設',
    excerpt: 'AI技術を活用した最新型の研修施設により、参加者に最高の学習体験を提供しています。',
    date: '2023年12月28日',
    author: '管理者',
    category: '施設',
  },
  {
    id: 5,
    title: 'LPK Binawan卒業生が日本で受賞',
    excerpt: '当プログラムの卒業生の中には、日本で働く企業から表彰される人材も多くいます。',
    date: '2023年12月20日',
    author: '管理者',
    category: '卒業生',
  },
  {
    id: 6,
    title: '無料ウェビナー：海外就職の準備方法',
    excerpt: '海外就職への準備に関するコツやテクニックについて、専門家と一緒に学ぶインタラクティブなウェビナーです。',
    date: '2023年12月15日',
    author: '管理者',
    category: 'イベント',
  },
];

export default function NewsPage() {
  return (
    <div className="w-full">
      <Navbar lang="jp" />

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ニュース & 記事</h1>
            <p className="text-lg md:text-xl">LPK Binawanからの最新情報</p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/jp/news/${article.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <Image
                  src={`/api/placeholder?w=400&h=200&text=Article%20${article.id}`}
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
                  記事を読む
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer lang="jp" />
    </div>
  );
}
