'use client';

import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Target, Eye, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full">
      <Navbar lang="jp" />

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">私たちについて</h1>
            <p className="text-lg md:text-xl">人材育成における卓越への道のり</p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          当社の物語
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6 leading-relaxed">
            LPK Binawanは2003年にシンプルながら強力なビジョンで設立されました：インドネシアの地元の人材と国際的な就職機会の橋渡しを作ることです。私たちは、人的資源の開発がすべての組織の長期的な成功の鍵であることを理解しています。
          </p>
          <p className="mb-6 leading-relaxed">
            20年以上の間、私たちは数千人の個人を訓練し、数百社の企業が最高の人材を見つけるのを支援した信頼できる職業訓練機関へと成長しました。教育と職業紹介の卓越性への私たちのコミットメントは、顧客と卒業生の満足度が非常に高いという結果をもたらしています。
          </p>
          <p className="mb-6 leading-relaxed">
            私たちの旅は献身的な小さなチームから始まり、現在は最新施設、国際認定講師、および様々な業界の大手パートナーとのグローバルネットワークを備えています。私たちの成長の各ステップは、中核的な価値観によって導かれています：誠実性、革新、およびクライアントと学習者の成功への約束。
          </p>
          <p className="leading-relaxed">
            今日、LPK Binawanは、インドネシアから質の高い人材を求める多国籍企業、特に日本市場とその他のアジア諸国の市場の選択肢となることを誇りに思います。
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            創業者 & リーダーシップ
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
                ブディ・ラハルジョ
              </h3>
              <p className="text-primary font-semibold text-lg mb-6">
                LPK Binawan創業者 & CEO
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                人材育成とHR開発業界での25年以上の経験を持ち、ブディ・ラハルジョはインドネシアの人材がグローバルステージで競争できるようにする明確なビジョンを持っています。
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">教育背景</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• 修士号 人的資源開発 - 東京大学</li>
                    <li>• 学士号 教育学 - インドネシア大学</li>
                    <li>• 国際訓練スペシャリスト認定</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">受賞歴</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• ベスト訓練機関賞 2022年</li>
                    <li>• インドネシア輸出卓越賞 2021年</li>
                    <li>• グローバル人材育成チャンピオン 2020年</li>
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
          ビジョン & ミッション
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">当社のビジョン</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              グローバル産業のニーズを満たすため、特に日本市場と東南アジアに焦点を当てた、質の高い人材を輩出する国内外最高の職業訓練機関となること。インドネシアの経済力を高めながら。
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">当社のミッション</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>• 関連性があり、国際的な品質を備えた訓練プログラムを提供する</p>
              <p>• 人材開発を通じて文化・産業間の橋渡しを構築する</p>
              <p>• 訓練から就職までの包括的なサポートを提供する</p>
              <p>• 学習者、パートナー企業、および社会に対して長期的な価値を創造する</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            当社のコア・バリュー
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: '誠実性',
                description: '私たちはあらゆる相互作用において透明性と誠実さにコミットしています',
              },
              {
                icon: Zap,
                title: 'イノベーション',
                description: '最新のプログラムと学習方法を継続的に開発しています',
              },
              {
                icon: Target,
                title: '卓越性',
                description: '業務のあらゆる側面において最高の基準を追求しています',
              },
              {
                icon: Eye,
                title: 'ケア',
                description: '学習者の長期的な成功を重視しています',
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

      <Footer lang="jp" />
    </div>
  );
}
