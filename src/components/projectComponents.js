const OverviewSection = ({
  backgroundImage,
  title,
  description,
  period,
  numberOfNumber,
  platform,
  type,
  industry,
}) => {
  const styles = {
    backgroundImage: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    overlay: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    title: {
      fontSize: "45px",
    },
    description: {
      fontSize: "20px",
    },
  };

  return (
    <section className="animated fadeInDown" style={styles.backgroundImage}>
      <div style={styles.overlay}>
        <div className="container section-wrapper d-flex flex-column height-md-700">
          <div className="d-sm-flex flex-column justify-content-center align-items-center">
            <h1
              className="project-title mt-md-10 text-center mt-sm-8"
              style={styles.title}
            >
              {title}
            </h1>
            <h3
              className="project-description text-center center-block"
              style={styles.description}
            >
              {description}
            </h3>
          </div>
          <div className="project-overview-container col-md-12 col-sm-12 d-none-sm">
            <div>
              <span>Time</span>
              <span>{period}</span>
            </div>
            <div>
              <span>Team</span>
              <span>{numberOfNumber} members</span>
            </div>
            <div>
              <span>Platforms</span>
              <span>{platform}</span>
            </div>
            <div>
              <span>Type</span>
              <span>{type}</span>
            </div>
            <div>
              <span>Industry</span>
              <span>{industry}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectIntro = ({
  backgroundColor,
  projectTitle,
  projectDescription,
  projectIdea,
  targetAudience,
  projectChallenges,
  projectResult,
  released,
  androidLink,
  iosLink,
  web,
}) => {
  const styles = {
    title: {
      fontSize: "40px",
    },
  };

  return (
    <section
      className="animated fadeInDown"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container section-wrapper d-flex flex-md-row flex-column">
        <div className="col-md-6 col-12 mr-md-3">
          <hr className="hr-white text-left ml-0" />
          <h2 className="project-title mt-4" style={styles.title}>
            {projectTitle}
          </h2>
          <h3 className="project-description text-left">
            {projectDescription}
          </h3>
          <div className="topic-block mt-5">
            <img
              className="icon mr-3 mb-3"
              src={require("../public/icons/project-idea.png")}
            />
            <div className="d-flex flex-column">
              <h2 className="project-title mt-0 mb-3">Project Idea</h2>
              <h3 className="project-description text-left">{projectIdea}</h3>
            </div>
          </div>
          <div className="topic-block mt-4 mb-5">
            <img
              className="icon mr-3 mb-3"
              src={require("../public/icons/audience.png")}
            />
            <div className="d-flex flex-column">
              <h2 className="project-title mt-0 mb-3">Target Audience</h2>
              <h3 className="project-description text-left">
                {targetAudience}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 bg-white py-5 px-5">
          <h2
            className="project-title font-weight-bold"
            style={{ color: "black" }}
          >
            Project Challenges
          </h2>
          {projectChallenges}
          <h2
            className="project-title font-weight-bold mt-5"
            style={{ color: "black" }}
          >
            Result
          </h2>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            {projectResult}
          </h3>
          <div className="flex-row d-flex mt-5">
            <button
              className="appstores-single-md appstores-single-sm"
              onClick={() => {
                window.open(iosLink, "_blank");
              }}
            >
              <img
                src={
                  released
                    ? require("../public/app-store.png")
                    : require("../public/app-store-coming-soon.png")
                }
                className="appstores-image"
              />
            </button>
            <button
              className="appstores-single-md appstores-single-sm"
              onClick={() => {
                window.open(androidLink, "_blank");
              }}
            >
              <img
                src={
                  released
                    ? require("../public/google-play.png")
                    : require("../public/google-play-coming-soon.png")
                }
                className="appstores-image2"
              />
            </button>
            {web && (
              <button
                className="appstores-single-md appstores-single-sm"
                onClick={() => {
                  window.open({ websiteLink }, "_blank");
                }}
              >
                <img
                  src={
                    released
                      ? require("../public/web.png")
                      : require("../public/web-coming-soon.png")
                  }
                  className="appstores-image2"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanningStage = ({ input, analysis, outcome, mainColor }) => {
  const styles = {
    title: {
      fontSize: "40px",
      color: "black",
    },
  };

  return (
    <section className="animated fadeInDown">
      <div className="container section-wrapper py-5 px-4">
        <hr
          className="hr-white text-left ml-0"
          style={{ backgroundColor: mainColor }}
        />
        <h2 className="project-title mt-4" style={styles.title}>
          Planning Stage
        </h2>
        <div className="stage-grid-container">
          <div>
            <div
              className="stage-circle"
              style={{
                borderBottomColor: mainColor,
                borderRightColor: mainColor,
              }}
            >
              1
            </div>
            <h2
              className="project-title font-weight-bold mt-4"
              style={{ color: "black" }}
            >
              Input:
            </h2>
            {input}
          </div>
          <div>
            <div
              className="stage-circle"
              style={{
                borderBottomColor: mainColor,
                borderRightColor: mainColor,
              }}
            >
              2
            </div>
            <h2
              className="project-title font-weight-bold mt-4"
              style={{ color: "black" }}
            >
              Analysis:
            </h2>
            {analysis}
          </div>
          <div>
            <div
              className="stage-circle"
              style={{
                borderBottomColor: mainColor,
                borderRightColor: mainColor,
              }}
            >
              3
            </div>
            <h2
              className="project-title font-weight-bold mt-4"
              style={{ color: "black" }}
            >
              Outcomes:
            </h2>
            {outcome}
          </div>
        </div>
      </div>
    </section>
  );
};

const Design = ({ children, backgroundColor }) => {
  return (
    <section className="animated fadeInDown" style={{ backgroundColor }}>
      <div className="color-split">
        <div className="container">{children}</div>
      </div>
    </section>
  );
};

const ProjectFeatures = ({ mainColor, subtitle, children }) => {
  const styles = {
    title: {
      fontSize: "40px",
      color: "black",
      textAlign: "center",
    },
  };

  return (
    <section className="animated fadeInDown">
      <div className="container section-wrapper">
        <hr
          className="hr-white text-center mx-auto"
          style={{ backgroundColor: mainColor }}
        />
        <h2 className="project-title mt-4 center-block" style={styles.title}>
          Main Features
        </h2>
        <h3
          className="project-description text-left"
          style={{ color: "black" }}
        >
          {subtitle}
        </h3>
        {children}
      </div>
    </section>
  );
};

export {
  OverviewSection,
  ProjectIntro,
  PlanningStage,
  Design,
  ProjectFeatures,
};
