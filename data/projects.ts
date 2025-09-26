export type Locale = 'en' | 'jp';

export type ProjectCopy = {
  title: string;
  summary: string;
  overview: string[];
  role: string;
  roleDescription: string;
  date: string;
  cta: string;
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
  gallery: string[];
  cardBackgroundColor: string;
  cardTextColor: string;
  heroBackgroundColor?: string;
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
    heroImage: '/images/steelcase_ui_home.png',
    gallery: [],
    cardBackgroundColor: '#272725',
    cardTextColor: '#FFFFFF',
    heroBackgroundColor: '#000000',
    designTools: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentTools: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    links: {
      website: {
        href: 'https://shop.steelcase.com/',
        label: {
          en: 'Landing Page',
          jp: 'Steelcase',
        },
      },
    },
    copy: {
      en: {
        title: 'Steelcase',
        summary:
          'Took part in the entire Shopify UI/UX design and development for Steelcase - an international manufacturer of furniture, casegoods, seating, and storage and partitioning systems for offices, hospitals, classrooms, and residential interiors.',
        overview: [
          'Steelcase is an international manufacturer of furniture, casegoods, seating, and storage and partitioning systems for offices, hospitals, classrooms, and residential interiors.',
          'The Shopify website was designed using a sleek, clean and modern approach.',
        ],
        role: 'UI/UX Designer, UI Developer',
        roleDescription: 'Interaction, visual design, prototyping, wireframe, testing and copywriting',
        date: 'March 2022 - Present',
        cta: 'Check it Out',
      },
      jp: {
        title: 'Steelcase（スチールケース）',
        summary:
          'Steelcase（国際的な家具、ケースグッズ、シーティング、オフィス、病院、教室、住宅インテリア向けの収納および仕切りシステムの製造メーカー）において、ShopifyのUI/UXデザインおよび開発全般に参加しました。',
        overview: [
          'Steelcase（スチールケース）は、オフィス、病院、教室、および住宅インテリア向けの家具、ケースグッズ、シーティング、収納および仕切りシステムの国際的な製造メーカーです。',
          'Shopifyのウェブサイトは、洗練された、清潔でモダンなアプローチを用いてデザインされました。',
        ],
        role: 'UI/UX デザイナー, UI 開発者',
        roleDescription: 'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
        date: '2022年3月 - 現在',
        cta: '詳しくはこちら',
      },
    },
  },
  {
    slug: 'ttracing',
    cardTitle: 'TTRacing',
    logo: '/images/ttracing-logo.png',
    heroImage: '/images/ttracing_ui_home.png',
    gallery: [],
    cardBackgroundColor: '#FFFFFF',
    cardTextColor: '#000000',
    heroBackgroundColor: '#000000',
    designTools: 'Adobe XD, Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentTools: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    links: {
      website: {
        href: 'http://ttracing.my/',
        label: {
          en: 'Landing Page',
          jp: 'TTRacing',
        },
      },
    },
    copy: {
      en: {
        title: 'TTRacing',
        summary:
          'Constantly take part and improving in the entire Shopify UI/UX design and development for TTRacing - a gaming chair company that strives to give everyone the best comfort experience for when they’re working or playing for long hours.',
        overview: [
          'TTRacing is a gaming chair company that strives to give everyone the best comfort experience for when they’re working or playing for long hours.',
          'The Shopify website was designed using a sleek, clean and modern approach.',
        ],
        role: 'Creative Lead, UI/UX Designer, UI Developer',
        roleDescription: 'Interaction, visual design, prototyping, wireframe, testing and copywriting',
        date: 'January 2021 - March 2022',
        cta: 'Check it Out',
      },
      jp: {
        title: 'TTRacing（ティーティーレーシング）',
        summary:
          '長時間の仕事やゲームをする際にすべての人に最高の快適さを提供することに努めている「TTRacing」ゲーミングチェア会社の Shopify UI/UX のデザインと開発全体に継続的に参加し、改善を行っていました。',
        overview: [
          'TTRacing（ティーティーレーシング）は、ゲーミングチェアの企業であり、誰もが長時間働いたりプレイしたりする際に最高の快適な体験を提供しようと努力しています。',
          'Shopifyのウェブサイトは、洗練された、清潔でモダンなアプローチを用いてデザインされました。',
        ],
        role: 'クリエイティブリード, UI/UX デザイナー, UI 開発者',
        roleDescription: 'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
        date: '2021年1月 - 2022年3月',
        cta: '詳しくはこちら',
      },
    },
  },
  {
    slug: 'strived',
    cardTitle: 'Strived',
    logo: '/images/strived-logo.png',
    heroImage: '/images/strived_ui_home.png',
    gallery: [],
    cardBackgroundColor: '#000000',
    cardTextColor: '#FFFFFF',
    heroBackgroundColor: '#000000',
    designTools: 'Shopify, Adobe Photoshop, Adobe Illustrator',
    developmentTools: 'Liquid Template Language (Liquid), HTML, CSS, jQuery, Javascript',
    links: {
      website: {
        href: 'https://strivedmy.com/',
        label: {
          en: 'Landing Page',
          jp: 'Strived',
        },
      },
    },
    copy: {
      en: {
        title: 'Strived',
        summary:
          'Took part in the entire Shopify UI/UX design and development for Strived - a fully customised gift shop that focuses on providing unique and high-quality products.',
        overview: [
          'Strived is a fully customised gift shop that focuses on providing unique and high-quality products.',
          'The Shopify website was designed using a sleek, clean and modern approach.',
        ],
        role: 'UI/UX Designer, UI Developer',
        roleDescription: 'Website design and copywriting',
        date: 'June 2021 - July 2021',
        cta: 'Check it Out',
      },
      jp: {
        title: 'Strived（ストライブド）',
        summary:
          'ユニークで高品質な製品の提供に重点を置いた完全にカスタマイズされたギフト ショップである Strived の Shopify UI/UX のデザインと開発全体に参加しました。',
        overview: [
          'Strived（ストライブド）は、ユニークで高品質な製品を提供することに焦点を当てた、完全にカスタマイズされたギフトショップです。',
          'Shopifyのウェブサイトは、洗練された、清潔でモダンなアプローチを用いてデザインされました。',
        ],
        role: 'UI/UX デザイナー, UI 開発者',
        roleDescription: 'ウェブサイトデザイン, コピーライティング',
        date: '2021年6月 - 2021年7月',
        cta: '詳しくはこちら',
      },
    },
  },
  {
    slug: 'snailer',
    cardTitle: 'Snailer',
    logo: '/gif/Snailer.gif',
    heroImage: '/images/snailer_ui_home.png',
    gallery: ['/images/SnailerFood.png', '/images/SnailerGrocery.png', '/images/SnailerCar.png'],
    cardBackgroundColor: '#468d65',
    cardTextColor: '#FFFFFF',
    designTools: 'Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe After Effects',
    developmentTools: 'React, HTML, CSS, Javascript',
    links: {
      appStore: 'https://apps.apple.com/us/app/snailer/id1540536548',
      playStore: 'https://play.google.com/store/apps/details?id=com.snailer_consumer&hl=en&gl=US',
    },
    copy: {
      en: {
        title: 'Snailer',
        summary:
          'Took part in UI design and development for Snailer - a white-labeled food/grocery delivery and vehicle hiring app based in Johor, Malaysia. The app and website is designed using playful, clean and modern approach.',
        overview: [
          'Snailer is a mobile application and website for food/grocery delivery and vehicle hiring services.',
          'There are total 3 apps and 1 website, mainly Consumer App, Rider App, Merchant App and Snailer Landing Page. The apps and website are designed using playful, clean and modern approach.',
        ],
        role: 'UI/UX Designer, UI Developer',
        roleDescription: 'Interaction, Visual design, Prototyping, Wireframe, Testing and Copywriting',
        date: 'July - December 2020',
        cta: 'Check it Out',
      },
      jp: {
        title: 'Snailer（スネイラー）',
        summary:
          'マレーシアのジョホール州に拠点を置くホワイトラベルの食品/食料品配達および車両レンタルアプリである Snailerの UI デザインと開発に参加しました。遊び心のある、クリーンでモダンなアプローチのアプリ・ウェブサイトのデザインです。',
        overview: [
          'Snailer（スネイラー）は、食品・食料品のデリバリーや車両のレンタルサービスのためのモバイルアプリケーションおよびウェブサイトです。',
          '合計3つのアプリと1つのウェブサイトがあります。主に、Consumer App（消費者向けアプリ）、Rider App（ライダー向けアプリ）、Merchant App（店舗向けアプリ）、そしてSnailer Landing Page（スネイラーランディングページ）です。これらのアプリとウェブサイトは、遊び心のある、清潔でモダンなアプローチを用いてデザインされています。',
        ],
        role: 'UI/UX デザイナー, UI 開発者',
        roleDescription: 'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
        date: '2020年7月 - 2020年12月',
        cta: '詳しくはこちら',
      },
    },
  },
  {
    slug: 'urcheckin',
    cardTitle: 'Urcheckin',
    logo: '/images/urcheckin-logo.png',
    heroImage: '/images/urcheckin_ui_home.png',
    gallery: ['/images/UrcheckinRoadSign.png', '/images/UrcheckinWalao.png', '/images/UrcheckinTwinTower.png'],
    cardBackgroundColor: '#E9493C',
    cardTextColor: '#FFFFFF',
    designTools: 'Adobe XD, Adobe Photoshop, Adobe Illustrator',
    developmentTools: 'React, HTML, CSS, Javascript',
    links: {
      appStore: 'https://apps.apple.com/us/app/urcheckin/id1507771058',
      playStore: 'https://play.google.com/store/apps/details?id=com.urcheckin_host.beta&hl=en_US&gl=US',
    },
    copy: {
      en: {
        title: 'Urcheckin',
        summary:
          'Took part in UI development for Urcheckin - A lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.',
        overview: [
          'Urcheckin is a lodging app which offers arrangement for vacation rental, primarily homestays, or tourism experiences.',
          'There are total 2 apps and 2 website, mainly Consumer App, Merchant App, Consumer Website and Merchant Website. Apps are developed using React Native while websites are developed using React.',
        ],
        role: 'UI Developer, UI Designer',
        roleDescription: 'UI developing, UI testing, fixing bugs, implementing responsive design',
        date: 'June - August 2020',
        cta: 'Check it Out',
      },
      jp: {
        title: 'Urcheckin（ユアチェキン）',
        summary: 'ホームステイを中心とした民泊や観光体験の手配を行う宿泊アプリ「Urcheckin」のUI開発に携わりました。',
        overview: [
          'Urcheckin（ユアチェキン）は、主に民宿や観光体験などのバケーションレンタルの手配を提供する宿泊アプリです。',
          '合計2つのアプリと2つのウェブサイトがあり、主にConsumer App（消費者向けアプリ）、Merchant App（店舗向けアプリ）、Consumer Website（消費者向けウェブサイト）、Merchant Website（店舗向けウェブサイト）があります。アプリはReact Nativeを使用して開発され、ウェブサイトはReactを使用して開発されています。',
        ],
        role: 'UI/UX デザイナー, UI 開発者',
        roleDescription: 'ビジュアルデザイン, インタラクション, プロトタイピング, ワイヤーフレーム',
        date: '2020年6月 - 2020年8月',
        cta: '詳しくはこちら',
      },
    },
  },
];

export const featuredProjectSlugs = ['steelcase', 'ttracing', 'strived', 'snailer', 'urcheckin'] as const;

export const getProjects = () => projects;

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getProjectsBySlugs = (slugs: readonly string[]) =>
  slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));

