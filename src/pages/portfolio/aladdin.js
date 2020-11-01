import { useEffect } from "react";
import AOS from "aos";

import MyLayout from "../../components/MyLayout";
import {
  OverviewSection,
  ProjectIntro,
  PlanningStage,
  Design,
  ProjectFeatures,
} from "../../components/projectComponents";

const Aladdin = () => {
  useEffect(() => {
    AOS.init();
  });

  const ProjectData = [
    {
      title: "Aladdin - Matchmaking App",
      description:
        "Intuitive, fluid and reticently brilliant social bridging application. Aladdin is exclusively designed to bridge people with similarities.",
      image: require("../../public/projectScreenshots/aladdin/aladdin.png"),
      platform: ["iOS", "Android"],
      backgroundColor: "#66359E",
      href: "/portfolio/aladdin",
    },
    {
      title: "Urcheckin - Lodging App",
      description:
        "An online room booking platform which lets people rent out their properties or spare rooms to guests.",
      image: require("../../public/projectScreenshots/urcheckin/urcheckin.png"),
      platform: ["Development"],
      backgroundColor: "#f85932",
      href: "/portfolio/urcheckin",
    },
  ];

  const mainColor = ProjectData[0].backgroundColor;

  return (
    <MyLayout title="Snailer">
      <OverviewSection
        backgroundImage={require("../../public/dating.jpg")}
        title="A dating mobile app"
        description="This app is design to help users find a soulmate or a friend."
        period="3 months"
        numberOfNumber="4"
        platform="iOS, Android"
        type="Dating App"
        industry="Social Media"
      />
      <ProjectIntro
        backgroundColor={mainColor}
        projectTitle="Aladdin"
        projectDescription="Aladdin is exclusively designed to bridge people with similarities and let them find their true love."
        projectIdea="Aladdin is an internal project. We wanted to build a dating app to cater for the local market. It is designed to allow intraracial dating which is not supported by major dating apps on the market."
        targetAudience="Singles"
        projectChallenges={<Challenges />}
        projectResult="We built a hight-performance iOS and Android apps from scratch, developed a matching system."
        iosLink={"https://apps.apple.com/app/id1476033156"}
        androidLink={
          "https://play.google.com/store/apps/details?id=com.aladdindate"
        }
        released
      />
      <PlanningStage
        mainColor={mainColor}
        projectTitle="Planning Stage"
        input={<Input />}
        analysis={<Analysis />}
        outcome={<Outcomes />}
      />
      <Design backgroundColor={mainColor}>
        <iframe
          frameborder="0"
          className="juxtapose center-block"
          width="100%"
          height="1080"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=a2b8c646-94e9-11ea-a879-0edaf8f81e27"
        />
      </Design>
      <ProjectFeatures mainColor={mainColor}>
        <Features mainColor={mainColor} />
      </ProjectFeatures>
    </MyLayout>
  );
};

const Challenges = () => {
  return (
    <ul>
      <li>
        <h3
          className="project-description text-left"
          style={{ color: "black" }}
        >
          A heavy focus on the performance, ensuring that the app runs as smooth
          as possible.
        </h3>
      </li>
      <li>
        <h3
          className="project-description text-left"
          style={{ color: "black" }}
        >
          Need to develop a matching system between users.
        </h3>
      </li>
    </ul>
  );
};

const Input = () => {
  return (
    <>
      <h3 className="project-description text-left" style={{ color: "black" }}>
        We had vision on:
      </h3>
      <ul>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            A mind map
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Distinguishing features of the app
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Business model basics
          </h3>
        </li>
      </ul>
    </>
  );
};

const Analysis = () => {
  return (
    <>
      <h3 className="project-description text-left" style={{ color: "black" }}>
        We've conducted a thorough analysis:
      </h3>
      <ul>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Evaluation of the app features
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Selecting the development platform
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            A product market fit analysis
          </h3>
        </li>
      </ul>
    </>
  );
};

const Outcomes = () => {
  return (
    <>
      <h3 className="project-description text-left" style={{ color: "black" }}>
        What we have done at the end:
      </h3>
      <ul>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            UI/UX design
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Wireframe
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Defining required technologies
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Product milestones planning
          </h3>
        </li>
      </ul>
    </>
  );
};

const Features = ({ mainColor }) => {
  return (
    <>
      <div className="features-item-container mb-5">
        <div className="order-2 order-md-1 my-5">
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
            Swipe to match
          </h2>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            A user may like a profile by swiping a card to the right or swipe a
            card to the left to pass. Users may match only if they liked each
            other. If there is a match, chat can be started.
          </h3>
        </div>
        <div className="order-1 order-md-2 mt-5">
          <img
            className="portfolio-screenshot center-block"
            src={require("../../public/projectScreenshots/aladdin/mainScreen.png")}
          />
        </div>
      </div>
      <div className="features-item-container my-5">
        <div className="mt-5">
          <img
            className="portfolio-screenshot center-block"
            src={require("../../public/projectScreenshots/aladdin/chat.png")}
          />
        </div>
        <div className="my-5">
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
            Chatting
          </h2>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Users are allow to chat with their matches. To protect user privacy
            and emotion, the opposite party won't know whether their massage has
            been seen. If there are a few matched users, it is possible to find
            a user by name.
          </h3>
        </div>
      </div>
      <div className="features-item-container mb-5">
        <div className="order-2 order-md-1 my-5">
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
            Racial based matching preference
          </h2>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Aladdin allows users to filter potential matches by race. Users can
            only see profiles from their desired races.
          </h3>
        </div>
        <div className="order-1 order-md-2 mt-5">
          <img
            className="portfolio-screenshot center-block"
            src={require("../../public/projectScreenshots/aladdin/preference.png")}
          />
        </div>
      </div>
    </>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // slidesPerRow: 5,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default Aladdin;
