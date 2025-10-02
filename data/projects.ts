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
  heroImageMobile?: string;
  gallery: string[];
  cardBackgroundColor: string;
  cardTextColor: string;
  cardHoverGradient?: [string, string];
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
    heroImage: '/images/steelcase.png',
    heroImageMobile: '/images/steelcasemobile.png',
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
    cardHoverGradient: ['#D12028', '#FFFFFF'],
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
];

export const featuredProjectSlugs = ['steelcase', 'ttracing'] as const;

export const getProjects = () => projects;

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getProjectsBySlugs = (slugs: readonly string[]) =>
  slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));

