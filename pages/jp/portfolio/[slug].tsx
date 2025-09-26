import type { GetStaticPaths, GetStaticProps } from 'next';
import MyLayout from '../../../components/MyLayout';
import ProjectDetail from '../../../components/ProjectDetail';
import type { Locale, Project } from '../../../data/projects';
import { getProjectBySlug, getProjects } from '../../../data/projects';

type PortfolioProjectProps = {
  project: Project;
};

const locale: Locale = 'jp';

const PortfolioProjectPage = ({ project }: PortfolioProjectProps) => {
  const copy = project.copy[locale];

  return (
    <MyLayout title={copy.title} description={copy.summary} jp>
      <ProjectDetail project={project} locale={locale} />
    </MyLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProjects().map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PortfolioProjectProps> = async ({ params }) => {
  const slug = params?.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default PortfolioProjectPage;
