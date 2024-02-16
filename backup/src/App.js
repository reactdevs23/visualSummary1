import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";
import CloseIcon from "./images/CloseIcon";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    circleBorder: "18px solid #F2F4F7",
    background: "#fff",
    date: "Thursday, 8. Feb 2024",
    dateColor: "#155EEF",
    heading: "Daily Stand Up",
    headingColor: "#000",

    data: [
      {
        title: "Reshaping the Universe",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },
      {
        title: "Value of Enthusiasm",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },

      {
        title: "Importance of Speed",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },
      {
        title: "Questioning Hypotheses",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },
      {
        title: "Rethinking Micromanagement",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },
      {
        title: "Embracing Uncertainty",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },
      {
        title: "Efficiency of Small Teams",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },
      {
        title: "Sources of Dopamine ",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
      },
      {
        title: "Beyond of  Limits",
        ttileColor: "#000",
        background: "#F670C7",
        border: "3px solid #000",
        boxShadow: "4px 6px 0px 0px #000",
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
