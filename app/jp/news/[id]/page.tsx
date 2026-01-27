'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Calendar, User, ChevronLeft, Share2 } from 'lucide-react';

const articles = {
  1: {
    title: 'LPK Binawan自動車業界向け新研修プログラムを開設',
    date: '2024年1月15日',
    author: '管理者',
    category: 'プログラム',
    content: `
      <p>最新の自動車業界のニーズに対応した新しい研修プログラムの開設を誇りをもってお知らせします。このプログラムは業界専門家との深い連携と綿密な研究の結果です。</p>

      <h3>プログラムの主な特徴</h3>
      <p>当社の自動車研修プログラムは、以下を含む包括的なカリキュラムを提供します：</p>
      <ul>
        <li>電動車を含む最新の自動車技術</li>
        <li>現代の診断とトラブルシューティングシステム</li>
        <li>業界標準設備を使用した実践的なトレーニング</li>
        <li>世界で認められた国際認定資格</li>
        <li>ソフトスキルとコミュニケーション研修</li>
      </ul>

      <h3>対象参加者</h3>
      <p>このプログラムは以下を対象としています：</p>
      <ul>
        <li>自動車業界に興味のある高卒・高専卒</li>
        <li>スキルアップを希望する専門家</li>
        <li>国際認定資格を取得したい経験豊富なメカニック</li>
      </ul>

      <h3>期間と料金</h3>
      <p>この研修プログラムは6ヶ月間のフルタイム形式です。修了後、就職保証を提供し、インドネシアと日本の大手自動車企業への就職に焦点を当てています。</p>

      <h3>業界パートナーからの証言</h3>
      <p>「このプログラムは私たちのニーズに完全に対応しています。LPK Binawanの卒業生は優れた技術的能力を示し、すぐに職場で活躍できます。」- PT.Otomotif Indonesia HR Director</p>

      <p>詳細情報と登録については、メールまたは電話でお問い合わせください。月ごとに登録を受け付けており、学習品質を確保するため定員制です。</p>
    `,
  },
  2: {
    title: '日本の大手企業5社との戦略的提携',
    date: '2024年1月10日',
    author: '管理者',
    category: 'パートナーシップ',
    content: `
      <p>LPK Binawanは日本の大手企業5社との戦略的提携を実現し、卒業生の就職機会を大幅に向上させました。この提携は6ヶ月に及ぶ密接な交渉の結果です。</p>

      <h3>提携企業</h3>
      <p>当社と提携する5つの大手企業は：</p>
      <ul>
        <li>ABC Manufacturing Co. Ltd - 製造業</li>
        <li>XYZ Technology Solutions - IT・テクノロジー部門</li>
        <li>Global Services Japan - サービス業</li>
        <li>Innovation Hub Tokyo - 研究開発</li>
        <li>Premium Hotels Group - ホスピタリティ・観光業</li>
      </ul>

      <h3>学習者への利点</h3>
      <p>この提携により、当プログラム参加者は以下を得られます：</p>
      <ul>
        <li>提携企業でのインターンシップ機会</li>
        <li>プログラム終了時の面接および採用試験の保証</li>
        <li>ビザおよび労働書類のサポート</li>
        <li>日本の専門家によるメンタリングプログラム</li>
        <li>国際的なキャリア発展の機会</li>
      </ul>

      <h3>長期的展望</h3>
      <p>この提携はさらなる拡大の可能性があります。特に半導体、自動車、再生可能エネルギー部門において、今後2年間で10社の追加パートナー企業を獲得することを目指しています。</p>

      <p>LPK Binawanとの協業に興味のある企業は、具体的なニーズと適切なプログラム設計について話し合うため、無料相談をお申し込みください。</p>
    `,
  },
  3: {
    title: '2023年の就職率が92%を達成',
    date: '2024年1月5日',
    author: '管理者',
    category: '成就',
    content: `
      <p>2023年はLPK Binawanにとって素晴らしい年となり、初期目標の85%を上回る92%の就職率を達成しました。この成果は、全スタッフの努力と業界パートナーのサポートの結果です。</p>

      <h3>統計データ</h3>
      <ul>
        <li>修了者総数：450名</li>
        <li>就職成功者数：414名</li>
        <li>就職率：92%</li>
        <li>初任給平均：月額8～12万ルピア</li>
        <li>日本での就職者：65%</li>
        <li>従業員定着率（6ヶ月）：96%</li>
      </ul>

      <h3>就職先の分野別配分</h3>
      <p>当社の就職先は様々な産業に分散しています：</p>
      <ul>
        <li>製造・産業部門：35%</li>
        <li>テクノロジー・IT部門：25%</li>
        <li>ホスピタリティ・観光部門：20%</li>
        <li>サービス・金融部門：15%</li>
        <li>その他：5%</li>
      </ul>

      <h3>卒業生からの証言</h3>
      <p>「LPK Binawanのプログラムは、確実に海外で働く準備をしてくれました。技術スキルだけでなく、文化的な適応と言語スキルも身につきました。」- ランディ、2023年卒業生</p>

      <h3>2024年の目標</h3>
      <p>この勢いを保ち、LPK Binawanは2024年の就職率を95%に引き上げることを目指しています。また、2つの新プログラムを開設し、国際的なパートナー企業ネットワークを5つの追加国に拡大する計画です。</p>
    `,
  },
};

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles[parseInt(params.id) as keyof typeof articles];

  if (!article) {
    return (
      <div className="w-full">
        <Navbar lang="jp" />
        <section className="py-24 px-4 max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
          <Link href="/jp/news" className="text-primary font-semibold hover:underline">
            ニュースページに戻る
          </Link>
        </section>
        <Footer lang="jp" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Navbar lang="jp" />

      {/* Article Header */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/jp/news"
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
          >
            <ChevronLeft className="w-4 h-4" />
            戻る
          </Link>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-12">
          <Image
            src={`/api/placeholder?w=800&h=400&text=Article`}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 text-gray-700">
            {article.content.split('<h3>').map((section, idx) => {
              if (idx === 0) {
                return (
                  <div key={idx} dangerouslySetInnerHTML={{ __html: section }} />
                );
              }
              return (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {section.substring(0, section.indexOf('<')).trim()}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section.substring(section.indexOf('>') + 1),
                    }}
                  />
                </div>
              );
            })}
          </div>
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 md:mb-0">この記事をシェアする</h4>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=lpkbinawan.com/jp/news/${params.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
              >
                f
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=lpkbinawan.com/jp/news/${params.id}&text=${article.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition"
              >
                𝕏
              </a>
              <button className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-400 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(articles)
              .filter(([id]) => id !== params.id)
              .slice(0, 3)
              .map(([id, art]) => (
                <Link
                  key={id}
                  href={`/jp/news/${id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-40 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 group-hover:text-primary transition line-clamp-2 mb-2">
                      {art.title}
                    </h3>
                    <p className="text-xs text-gray-500">{art.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer lang="jp" />
    </div>
  );
}
