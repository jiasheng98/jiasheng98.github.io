import { useMemo, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AppLink from '../common/AppLink';
import Reveal from '../common/Reveal';
import LazyImage from '../LazyImage';
import type { Locale, Project } from '../../data/projects';
import { featuredProjectSlugs, getProjectsBySlugs } from '../../data/projects';

type WorkSectionProps = {
  jp?: boolean;
};

const WorkSection = ({ jp = false }: WorkSectionProps) => {
  const locale: Locale = jp ? 'jp' : 'en';
  const projects = useMemo(() => getProjectsBySlugs(featuredProjectSlugs), []);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number | null) => {
    if (typeof selectedIndex === 'number') {
      setIndex(selectedIndex);
    }
  };

  return (
    <section className="home-work__section" id="work">
      <div className="home-work__wrap">
        <div>
          <h1 className="home-work__header">{jp ? '制作事例' : 'Check Out My Work!'}</h1>
        </div>
        <div className="home-work__carousel">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
            {projects.map((project) => (
              <Carousel.Item key={`${project.slug}-${locale}`}>
                <CarouselCard project={project} locale={locale} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

type CarouselCardProps = {
  project: Project;
  locale: Locale;
};

const CarouselCard = ({ project, locale }: CarouselCardProps) => {
  const copy = project.copy[locale];
  const href = locale === 'jp' ? `/jp/portfolio/${project.slug}` : `/portfolio/${project.slug}`;

  return (
    <div>
      <Reveal
        delay={200}
        className="home-work__card"
        style={{ backgroundColor: project.cardBackgroundColor, color: project.cardTextColor }}
      >
        <div className="home-work__card-body">
          <div>
            <div className="home-work__title-row">
              <Reveal animation="fade-right" delay={400}>
                <LazyImage src={project.logo} className="home-work__logo" alt={`${project.cardTitle} logo`} />
              </Reveal>
              <p className="home-work__title">{project.cardTitle}</p>
            </div>
            <p className="home-work__subtitle">{copy.summary}</p>
          </div>
          {project.gallery.length ? (
            <div className="home-work__image-container">
              {project.gallery.map((image, imageIndex) => (
                <Reveal
                  key={`${project.slug}-detail-${imageIndex}`}
                  delay={500 + imageIndex * 100}
                  className="home-work__image-wrapper"
                >
                  <LazyImage
                    src={image}
                    className="home-work__image"
                    alt={`${project.cardTitle} detail ${imageIndex + 1}`}
                  />
                </Reveal>
              ))}
            </div>
          ) : null}
          <AppLink href={href} className="home-work__button">
            <span
              className="home-work__button-text"
              style={{ color: project.cardBackgroundColor, backgroundColor: project.cardTextColor }}
            >
              {copy.cta}
            </span>
          </AppLink>
        </div>
        <Reveal animation="fade-left" delay={400} className="home-work__phone">
          <LazyImage src={project.heroImage} className="home-work__phone-image" alt={`${project.cardTitle} preview`} />
        </Reveal>
      </Reveal>
    </div>
  );
};

export default WorkSection;
