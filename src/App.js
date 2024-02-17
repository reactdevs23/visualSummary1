import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";
import Moral from "./images/Moral";
import Technology from "./images/Technology";
import Vision from "./images/Vision";
import Icon from "./images/Icon";
import Energy from "./images/Energy";
import Personal from "./images/Personal";
import Big from "./images/Big";
import Learning from "./images/Learning";
import Focus from "./images/Focus";
import Perception from "./images/Perception";
import Limitation from "./images/Limitation";
import Oportunities from "./images/Oportunities";
import Narrow from "./images/Narrow";
import Empowerment from "./images/Empowerment";
import Mistakes from "./images/Mistakes";
import Unconventional from "./images/Unconventional";
import Replication from "./images/Replication";
import Questioning from "./images/Questioning";
import Faulty from "./images/Faulty";
import Cultural from "./images/Cultural";
import Resource from "./images/Resource";
import Agile from "./images/Agile";
import Idea from "./images/Idea";
import Validation from "./images/Validation";
import Action from "./images/Action";
import Invisible from "./images/Invisible";
import Physics from "./images/Physics";
import Expanding from "./images/Expanding";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",

    background: "#fff",
    topHeader: {
      subHeading: "VISUAL SUMMARY",
      subHeadingColor: "#EE46BC",
      heading: "Beliefs on Progress & Innovation",
      headingColor: "#000",
    },
    mainIcon: <Icon color="#fff" />,
    circleBg: "#000",
    heading: "Some Things I Believe in",
    headingColor: "#fff",
    subHeading: "Nat Friedman",
    subHeadingColor: "#d0d5dd",

    data: [
      {
        title: "Reshaping the Universe",
        ttileColor: "#000",
        background: "#FDE272",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",

        infoWrapper: [
          {
            info: "Moral Imperative",
            infoColor: "#000",
            icon: <Moral color="#000" bg="#FEEE95" />,
          },
          {
            info: "Technology as a Tool",
            infoColor: "#000",
            icon: <Technology color="#000" bg="#FEEE95" />,
          },
          {
            info: "Vision and Ambition",
            infoColor: "#000",
            icon: <Vision color="#000" bg="#FEEE95" />,
          },
        ],
      },
      {
        title: "Value of Enthusiasm",
        ttileColor: "#000",
        background: "#F38744",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Personal Motivation",
            infoColor: "#000",
            icon: <Personal color="#000" bg="#F9DBAF" />,
          },
          {
            info: "Energy as Currency",
            infoColor: "#000",
            icon: <Energy color="#000" bg="#F9DBAF" />,
          },
          {
            info: "Big vs. Small",
            infoColor: "#000",
            icon: <Big color="#000" bg="#F9DBAF" />,
          },
        ],
      },

      {
        title: "Importance of Speed",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Learning & Reality",
            infoColor: "#000",
            icon: <Learning color="#000" bg="#FCE7F6" />,
          },
          {
            info: "Focus on Essentials",
            infoColor: "#000",
            icon: <Focus color="#000" bg="#FCE7F6" />,
          },
          {
            info: "Perception of Time",
            infoColor: "#000",
            icon: <Perception color="#000" bg="#FCE7F6" />,
          },
        ],
      },
      {
        title: "Questioning Hypotheses",
        ttileColor: "#000",
        background: "#9B8AFB",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Limitations of EMH",
            infoColor: "#000",
            icon: <Limitation color="#000" bg="#D9D6FE" />,
          },
          {
            info: "Opportunities in Anomalies",
            infoColor: "#000",
            icon: <Oportunities color="#000" bg="#D9D6FE" />,
          },
          {
            info: "Narrow Focus",
            infoColor: "#000",
            icon: <Narrow color="#000" bg="#D9D6FE" />,
          },
        ],
      },
      {
        title: "Rethinking Micromanagement",
        ttileColor: "#000",
        background: "#FDE272",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Empowerment Through Detail",
            infoColor: "#000",
            icon: <Empowerment color="#000" bg="#FEEE95" />,
          },
          {
            info: "Mistakes vs. Excellence",
            infoColor: "#000",
            icon: <Mistakes color="#000" bg="#FEEE95" />,
          },
          {
            info: "Unconventional Wisdom",
            infoColor: "#000",
            icon: <Unconventional color="#000" bg="#FEEE95" />,
          },
        ],
      },
      {
        title: "Embracing Uncertainty",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Faulty Beliefs",
            infoColor: "#000",
            icon: <Faulty color="#000" bg="#FCE7F6" />,
          },

          {
            info: "Questioning Everything",
            infoColor: "#000",
            icon: <Questioning color="#000" bg="#FCE7F6" />,
          },
          {
            info: "Replication Crisis",
            infoColor: "#000",
            icon: <Replication color="#000" bg="#FCE7F6" />,
          },
        ],
      },
      {
        title: "Efficiency of Small Teams",
        ttileColor: "#000",
        background: "#F38744",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Cultural Dynamics",
            infoColor: "#000",
            icon: <Cultural color="#000" bg="#F9DBAF" />,
          },
          {
            info: "Resource Allocation",
            infoColor: "#000",
            icon: <Resource color="#000" bg="#F9DBAF" />,
          },
          {
            info: "Agile Decision-Making",
            infoColor: "#000",
            icon: <Agile color="#000" bg="#F9DBAF" />,
          },
        ],
      },
      {
        title: "Sources of Dopamine ",
        ttileColor: "#000",
        background: "#9B8AFB",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Idea Improvement",
            infoColor: "#000",
            icon: <Idea color="#000" bg="#D9D6FE" />,
          },
          {
            info: "Validation vs. Achievement",
            infoColor: "#000",
            icon: <Validation color="#000" bg="#D9D6FE" />,
          },
          {
            info: "Action Orientation",
            infoColor: "#000",
            icon: <Action color="#000" bg="#D9D6FE" />,
          },
        ],
      },
      {
        title: "Beyond of  Limits",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
        infoWrapper: [
          {
            info: "Invisible Orthodoxy",
            infoColor: "#000",
            icon: <Invisible color="#000" bg="#FCE7F6" />,
          },
          {
            info: "Physics as Boundary",
            infoColor: "#000",
            icon: <Physics color="#000" bg="#FCE7F6" />,
          },
          {
            info: "Expanding Horizons",
            infoColor: "#000",
            icon: <Expanding color="#000" bg="#FCE7F6" />,
          },
        ],
      },
    ],
  });

  return (
    <div
      style={{
        fontFamily: allData.fontFamily,
        background: allData.background,
      }}
    >
      <MainComponent {...allData} border={allData.circleBorder} />
    </div>
  );
}

export default App;
