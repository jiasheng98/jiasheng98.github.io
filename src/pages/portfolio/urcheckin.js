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

const Urcheckin = () => {
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

  const mainColor = ProjectData[1].backgroundColor;

  return (
    <MyLayout title="CW Rewards">
      <OverviewSection
        backgroundImage={require("../../public/projectScreenshots/urcheckin/homestay.jpg")}
        title="A lodging marketplace"
        description="The South East Asia first lodging app with host-to-host features. It not only helps users to find their accommodations but also allows hosts to rent their listings to each other"
        period="3 months"
        numberOfNumber="4"
        platform="iOS, Android, Web"
        type="Lodging App"
        industry="Property Marketplace"
      />
      <ProjectIntro
        backgroundColor={mainColor}
        projectTitle="Urcheckin"
        projectDescription="Traditional lodging apps led to an efficient supply of rooms, our client enter this market with a fresh concept."
        projectIdea="The main idea of Urcheckin is to provide users with an opportunity to find a lodge with ease as well as allow hosts to rent their listings between each other."
        targetAudience="Travellers, Homestays & Hotels Operator"
        projectChallenges={<Challenges />}
        projectResult="We built a hight-performance iOS, Android apps and a web applications from scratch. We deferred the features which require the third-party OTA service and release them in the future after the client obtains the required licenses and qualifications."
        // released
        web
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
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=3257be98-969c-11ea-a879-0edaf8f81e27"
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
          Subscription and integration of a third-party hotel OTA service in
          which a subscriber needs to possess certain licenses and
          qualifications.
        </h3>
      </li>
      <li>
        <h3
          className="project-description text-left"
          style={{ color: "black" }}
        >
          A UI and UX should be as simple and intuitive as possible
        </h3>
      </li>
      <li>
        <h3
          className="project-description text-left"
          style={{ color: "black" }}
        >
          The main challenge for a customer was to create a functional and
          user-friendly platform remaining within the budget for MVP
        </h3>
      </li>
    </ul>
  );
};

const Input = () => {
  return (
    <>
      <h3 className="project-description text-left" style={{ color: "black" }}>
        The client shared the vision on:
      </h3>
      <ul>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Business model
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Desired list of features
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Initial design concept
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
            Over 10 meetings were held to agree on the details
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Appropriate technology stack
          </h3>
        </li>
        <li>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Required third-party services
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
            Final decisions on the app's features & functions
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
            Searching for a room
          </h2>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            Urcheckin uses Google APIs to deliver an excellent experience of
            using maps. The developers used these APIs to spot all the
            properties from the Urcheckin’s database and let users choose the
            appropriate place to stay.
          </h3>
        </div>
        <div className="order-1 order-md-2 mt-5">
          <img
            className="portfolio-screenshot center-block"
            src={require("../../public/projectScreenshots/urcheckin/result.png")}
          />
        </div>
      </div>
      <div className="features-item-container my-5">
        <div className="mt-5">
          <img
            className="portfolio-screenshot center-block"
            src={require("../../public/projectScreenshots/urcheckin/offer.png")}
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
            Make offer
          </h2>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            An user is allowed to make an offer to a host to get a cheaper rate
            to rent the room he/she wants.
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
            Building in-app communication channel
          </h2>
          <h3
            className="project-description text-left"
            style={{ color: "black" }}
          >
            It is necessary to give both parties an additional channel for
            keeping in touch. A real-time chat was a perfect fit for fulfilling
            that need. With its help, guests and hosts can both message each
            other to specify details.
          </h3>
        </div>
        <div className="order-1 order-md-2 mt-5">
          <img
            className="portfolio-screenshot center-block"
            src={require("../../public/projectScreenshots/urcheckin/chat.png")}
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

export default Urcheckin;
