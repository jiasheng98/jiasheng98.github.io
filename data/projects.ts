export type Locale = 'en' | 'jp';

export type ProjectCopy = {
  title: string;
  summary: string;
  overview: string[];
  role: string;
  roleDescription: string;
  date: string;
  cta: string;
  feature1_header: string;
  feature2_header: string;
  feature1_description: string;
  feature2_description: string;
};

export type ProjectLinks = {
  appStore?: string;
  playStore?: string;
  website?: {
    href: string;
    label?: Partial<Record<Locale, string>>;
  };
};

export type Project = {
  slug: string;
  cardTitle: string;
  logo: string;
  heroImage: string;
  heroImageMobile: string;
  gallery: string[];
  cardBackgroundColor: string;
  cardTextColor: string;
  cardHoverGradient?: [string, string];
  heroBackgroundColor?: string;
  feature1: string;
  feature2: string;
  designTools?: string;
  developmentTools?: string;
  links?: ProjectLinks;
  copy: Record<Locale, ProjectCopy>;
};

const projects: Project[] = [
  {
    slug: 'steelcase',
    cardTitle: 'Steelcase',
    logo: '/images/steelcase-logo.png',
    heroImage: '/images/steelcase.png',
    heroImageMobile: '/images/steelcasemobile.png',
    feature1: '/images/steelcase1.png',
    feature2: '/images/steelcase2.png',
    gallery: [],
    cardBackgroundColor: '#272725',
    cardTextColor: '#FFFFFF',
    cardHoverGradient: ['#444444', '#FFFFFF'],
    heroBackgroundColor: '#000000',
    designTools: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentTools: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    links: {
      website: {
        href: 'https://shop.steelcase.com/',
        label: {
          en: '',
          jp: '',
        },
      },
    },
    copy: {
      en: {
        title: 'Steelcase',
        summary:
          'Delivered the Shopify e-commerce experience for Steelcase, a global leader in office and lifestyle furniture, emphasizing clean design, usability, and seamless product discovery.',
        overview: [
          'Steelcase is a global leader in office and lifestyle furniture, known for creating ergonomic, high-quality solutions for work and home. I designed and developed their Shopify website to showcase products in a modern, streamlined way, focusing on usability, clarity, and a seamless shopping experience.',
        ],
        role: 'UI/UX Designer',
        roleDescription: 'Interaction, Visual Design, Prototyping, Wireframe, Testing and Copywriting',
        date: 'March 2022 - April 2024',
        cta: 'Check it Out',
        feature1_header: 'Gaming Experience',
        feature2_header: 'Product Highlight',
        feature1_description: 'A promotional landing page created to highlight Steelcase’s collaboration with the League of Legends Japan League, showcasing ergonomic chairs designed for gaming comfort and performance.',
        feature2_description: 'A dedicated product spotlight page designed to showcase the Steelcase Karman chair, with bold visuals, clear calls to action, and a streamlined path to purchase.',
      },
      jp: {
        title: 'Steelcase（スチールケース）',
        summary:
          'Steelcase の Shopify eコマース体験を設計・実装。洗練されたデザインと使いやすさ、シームレスな商品発見を重視しました。',
        overview: [
          'Steelcase はオフィスや生活空間向けの高品質な家具を提供するグローバルブランドです。プロダクトを魅力的かつ分かりやすく見せるため、モダンで無駄のないUIと明快な導線でShopifyサイトを設計・開発しました。'
        ],
        role: 'UI/UX デザイナー',
        roleDescription: 'インタラクション、ビジュアルデザイン、プロトタイピング、ワイヤーフレーム、テスト、コピーライティング',
        date: '2022年3月〜2024年4月',
        cta: 'サイトを見る',
        feature1_header: 'ゲーミング体験',
        feature2_header: '製品ハイライト',
        feature1_description: 'League of Legends Japan League とのコラボを打ち出すプロモーションLP。ゲーミングに最適な快適性とパフォーマンスを強調しました。',
        feature2_description: 'Steelcase Karman を主役に据えたプロダクトスポットライト。大胆なビジュアルと明確なCTAで購入までの導線を最短化。'
      }

    },
  },
  {
    slug: 'ttracing',
    cardTitle: 'TTRacing',
    logo: '/images/ttracingwhite.png',
    heroImage: '/images/ttracing.png',
    heroImageMobile: '/images/ttracingmobile.png',
    feature1: '/images/ttracing1.png',
    feature2: '/images/ttracing2.png',
    gallery: [],
    cardBackgroundColor: '#FFFFFF',
    cardTextColor: '#000000',
    cardHoverGradient: ['#D12028', '#FFFFFF'],
    heroBackgroundColor: '#000000',
    designTools: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentTools: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    links: {
      website: {
        href: 'http://ttracing.my/',
        label: {
          en: '',
          jp: '',
        },
      },
    },
    copy: {
      en: {
        title: 'TTRacing',
        summary:
          'Designed and built the Shopify storefront for TTRacing, a gaming chair brand focused on ergonomics and comfort, creating a sleek shopping experience optimized for conversions.',
        overview: [
          'TTRacing is a gaming chair brand dedicated to delivering comfort and ergonomics for both work and play. I designed and developed their Shopify website with a sleek, modern interface that highlights products, promotions, and a seamless shopping experience.',
        ],
        role: 'Creative Lead',
        roleDescription: 'Interaction, Visual Design, Prototyping, Wireframe, Testing and Copywriting',
        date: 'December 2020 - March 2022',
        cta: 'Check it Out',
        feature1_header: 'Brand Story',
        feature2_header: 'Product Page Design',
        feature1_description: 'Showcasing the craftsmanship, ergonomics, and design philosophy behind TTRacing products, highlighting the brand’s commitment to comfort and performance',
        feature2_description: 'A streamlined product detail page designed to highlight key features, customization options, and clear pricing, optimized to drive conversions.',
      },
      jp: {
        title: 'TTRacing（ティーティーレーシング）',
        summary:
          '人間工学と快適性に特化したゲーミングチェアブランド TTRacing の Shopify ストアを設計・構築。コンバージョン最適化を重視した洗練された購買体験を実現しました。',
        overview: [
          'TTRacing は仕事にもゲームにも対応する快適性とエルゴノミクスを追求するブランドです。プロモーション訴求と商品理解を両立するモダンUIで、スムーズな購入体験を設計・開発しました。'
        ],
        role: 'クリエイティブリード',
        roleDescription: 'インタラクション、ビジュアルデザイン、プロトタイピング、ワイヤーフレーム、テスト、コピーライティング',
        date: '2020年12月〜2022年3月',
        cta: 'サイトを見る',
        feature1_header: 'ブランドストーリー',
        feature2_header: '商品ページデザイン',
        feature1_description: 'クラフトマンシップやエルゴノミクス、検証プロセスを可視化し、ブランドの価値観と信頼性を伝える構成に。',
        feature2_description: '主な特徴・バリエーション・価格を明快に提示。カスタマイズと360°ビューで理解と購入意欲を高めました。'
      }
    },
  },
  {
    slug: 'gptchart',
    cardTitle: 'GPTChart',
    logo: '/images/steelcase-logo.png',
    heroImage: '/images/gptchart.png',
    heroImageMobile: '/images/gptchartmobile.png',
    feature1: '/images/gptchart1.png',
    feature2: '/images/gptchart2.png',
    gallery: [],
    cardBackgroundColor: '#272725',
    cardTextColor: '#FFFFFF',
    cardHoverGradient: ['#6610f2', '#FFFFFF'],
    heroBackgroundColor: '#000000',
    designTools: 'Figma',
    developmentTools: 'React, Next.js, Firebase, Google Cloud, OpenAI API, Codex, ChatGPT',
    links: {
      website: {
        href: 'https://gptchart.ai/',
        label: {
          en: '',
          jp: '',
        },
      },
    },
    copy: {
      en: {
        title: 'GPTChart',
        summary:
          'Developed the UX/UI for GPTChart, an AI-powered trading assistant that analyzes market data to deliver fast, explainable insights for crypto, forex, and stocks.',
        overview: [
          'GPTChart is a self-learning AI platform for financial analysis, built to interpret real market data and trading patterns. The website was designed with a sleek, modern interface to deliver fast, explainable insights across crypto, forex, and stock markets.',
        ],
        role: 'Founder',
        roleDescription: 'UI/UX Design, Frontend, Backend, Marketing',
        date: 'March 2025 - Present',
        cta: 'Check it Out',
        feature1_header: 'Chart Analysis Tools',
        feature2_header: 'AI Trade Evaluation',
        feature1_description: 'An interactive interface that combines chart selection and AI-driven trade analysis, helping users identify market trends, strategies, and entry points with clarity.',
        feature2_description: 'A results-focused view that breaks down AI trade decisions with entry, stop-loss, take-profit, and risk-reward ratios, helping users understand and refine their strategies.',
      },
      jp: {
        title: 'GPTChart',
        summary:
          '市場データを解析して迅速で説明可能なインサイトを提供する、AI搭載のトレーディングアシスタントのUX/UIを開発しました（暗号資産・FX・株式対応）。',
        overview: [
          'GPTChart は実データと取引ロジックから学習する金融分析プラットフォームです。高速で読みやすいインサイトを提供するため、ミニマルでモダンなUIを設計し、暗号資産・FX・株式を横断して活用できる体験を実現しました。'
        ],
        role: 'ファウンダー',
        roleDescription: 'UI/UXデザイン、フロントエンド、バックエンド、マーケティング',
        date: '2025年3月〜現在',
        cta: 'サイトを見る',
        feature1_header: 'チャート分析ツール',
        feature2_header: 'AIトレード評価',
        feature1_description: '時間足・インジケーター・エキスパートモードを統合。チャート選択からAI分析までを一連の流れで支援します。',
        feature2_description: 'エントリー／ストップ／テイクプロフィット／リスクリワードを可視化し、AIの判断根拠と学習に基づく改善点を提示します。'
      }
    },
  },
  {
    slug: 'ctflife',
    cardTitle: 'CTFLife',
    logo: '/images/steelcase-logo.png',
    heroImage: '/images/ctflife.png',
    heroImageMobile: '/images/ctflifemobile.png',
    feature1: '/images/ctf1.png',
    feature2: '/images/ctf2.png',
    gallery: [],
    cardBackgroundColor: '#272725',
    cardTextColor: '#FFFFFF',
    cardHoverGradient: ['#009188', '#004846'],
    heroBackgroundColor: '#000000',
    designTools: 'Figma, Power BI',
    developmentTools: '-',
    links: {
      website: {
        href: 'https://corpagyprospect.b2clogin.com/corpagyprospect.onmicrosoft.com/b2c_1_recruitment_signin_flow_prd/oauth2/v2.0/authorize?client_id=7b6f9da8-6e92-45c9-b01a-f9d79cbb639e&scope=openid%20offline_access%20profile&redirect_uri=https%3A%2F%2Fsmartrecruit.ctflife.com.hk&client-request-id=4ff22c77-1607-4bb6-bee5-484ce81db2af&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.31.0&client_info=1&code_challenge=rNjIkJ3XlGXM0OLn64s0U8BQYUeYeGSDbwjXmHA1fmI&code_challenge_method=S256&nonce=0982ea8e-235c-446a-a861-ddfe7c88b375&state=eyJpZCI6IjI4MDc5YjMxLTQ1OTAtNDA4Ny04ZTZkLTZmNDJjMWZlNzM2MyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&lang=zh-HK',
        label: {
          en: '',
          jp: '',
        },
      },
    },
    copy: {
      en: {
        title: 'CTFLife',
        summary:
          'Contributed to the end-to-end UX/UI design for CTFLife’s digital platform, focusing on streamlining insurance application flows and creating a modern, intuitive interface for both agents and customers.',
        overview: [
          'CTFLife is a Hong Kong–based life insurance company under the Chow Tai Fook Group. The digital platform was designed to simplify onboarding and customer engagement, offering a modern and intuitive experience for policy management and support.',
        ],
        role: 'UI/UX Designer',
        roleDescription: 'UI/UX design, Prototyping, Wireframe, Testing and Copywriting',
        date: 'April 2024 - November 2024',
        cta: 'Check it Out',
        feature1_header: 'Insurance Onboarding Flow',
        feature2_header: 'Applications Dashboard',
        feature1_description: 'Streamlined application tracking with clear progress indicators, document uploads, and status updates to improve transparency and efficiency.',
        feature2_description: 'Designed to give recruiters a clear overview of all applications, enabling quick filtering, sorting, and status updates across multiple candidates.',
      },
      jp: {
        title: 'CTFLife',
        summary:
          'CTFLife のデジタルプラットフォームにおけるUX/UIを担当。保険の申請・オンボーディングを効率化し、エージェントと顧客の双方にとって使いやすい体験を設計しました。',
        overview: [
          'CTFLife は香港の生命保険ブランドです。本人確認や申請進捗、必要書類の提出をスムーズにするUIで、オンボーディングと継続的な顧客サポートを最適化しました。'
        ],
        role: 'UI/UX デザイナー',
        roleDescription: 'UI/UXデザイン、プロトタイピング、ワイヤーフレーム、テスト、コピーライティング',
        date: '2024年4月〜2024年11月',
        cta: 'サイトを見る',
        feature1_header: '保険オンボーディングフロー',
        feature2_header: '応募管理ダッシュボード',
        feature1_description: '進捗表示・書類アップロード・ステータス更新を分かりやすく統合し、透明性と処理効率を向上。',
        feature2_description: '応募者一覧をフィルタ・ソート・一括操作で高速に管理。担当者視点の業務を効率化します。'
      },
    },
  },
  {
    slug: 'resiclub',
    cardTitle: 'Mitsubishi Residence Club',
    logo: '/images/steelcase-logo.png',
    heroImage: '/images/resiclub.png',
    heroImageMobile: '/images/resiclubmobile.png',
    feature1: '/images/resiclub1.png',
    feature2: '/images/resiclub2.png',
    gallery: [],
    cardBackgroundColor: '#272725',
    cardTextColor: '#FFFFFF',
    cardHoverGradient: ['#B81C22', '#FBF1F2'],
    heroBackgroundColor: '#000000',
    designTools: 'Figma, ChatGPT, Recraft',
    developmentTools: '-',
    links: {
      website: {
        href: 'https://www.resiclub.com/',
        label: {
          en: '',
          jp: '',
        },
      },
    },
    copy: {
      en: {
        title: 'Mitsubishi Residence Club',
        summary:
          'Contributed to the UX/UI design of the Mitsubishi Residence Club website — a digital membership platform by Mitsubishi Estate Group offering housing support, lifestyle services, and member benefits.',
        overview: [
          'Mitsubishi Residence Club is a digital platform and membership service from Mitsubishi Estate, unifying property search, contract procedures, post-move maintenance, and lifestyle perks under one roof.',
        ],
        role: 'UI/UX Designer',
        roleDescription: 'UI/UX design, Prototyping, Wireframe, Testing and Copywriting',
        date: 'November 2024 - Present',
        cta: 'Check it Out',
        feature1_header: 'Residence Club Platform',
        feature2_header: 'A Partner in Life',
        feature1_description: 'A unified digital experience that brings together real estate services, membership features, and everyday living support in one accessible interface.',
        feature2_description: 'Introducing Mitsubishi Residence Club as a lifelong partner, providing guidance, services, and benefits that support every stage of home ownership and daily living.',
      },
      jp: {
        title: '三菱地所のレジデンスクラブ',
        summary:
          '三菱地所グループの会員向けプラットフォーム「レジデンスクラブ」のUX/UI設計に参画。住まいのサポートやライフスタイル特典をワンストップで提供する体験をデザインしました。',
        overview: [
          'レジデンスクラブは、物件探しから契約手続き、入居後のメンテナンスや暮らしの特典までを一元化するデジタル会員サービスです。多様なニーズを一つの導線で結び、安心で便利な住まい体験を実現します。'
        ],
        role: 'UI/UX デザイナー',
        roleDescription: 'UI/UXデザイン、プロトタイピング、ワイヤーフレーム、テスト、コピーライティング',
        date: '2024年11月〜現在',
        cta: 'サイトを見る',
        feature1_header: 'レジデンスクラブ・プラットフォーム',
        feature2_header: '人生に寄り添うパートナー',
        feature1_description: '不動産サービス、会員機能、日々の暮らしのサポートを一つのUIに集約し、直感的に利用できる体験を提供。',
        feature2_description: '住まいの検討から入居後まで、継続的なガイダンスや特典・サービスでお客さまの暮らしを支える存在としての役割を表現。'
      },
    },
  },
];

export const featuredProjectSlugs = ['resiclub', 'ctflife', 'gptchart', 'steelcase', 'ttracing'] as const;

export const getProjects = () => projects;

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getProjectsBySlugs = (slugs: readonly string[]) =>
  slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));

