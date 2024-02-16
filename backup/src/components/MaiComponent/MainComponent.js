import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  date,
  dateColor,
  heading,
  headingColor,
  impediment,
  data,
  yesterday,
  today,

  border,
}) => {
  const calculatePosition = (index, totalImages, radius) => {
    const angle = (360 / totalImages) * index - 90;
    const adjustedRadius = radius * (1 + 1 / totalImages); // Adjust radius dynamically
    const x = adjustedRadius * Math.cos((angle * Math.PI) / 180);
    const y = adjustedRadius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  let wrapperSize = 480; // Set the desired size of the circular wrapper
  const radius = wrapperSize / 2;

  const renderImages = (data) => {
    return data.map((el, index) => {
      const totalImages = data.length;
      const baseRadius = radius * 1;
      const { x, y } = calculatePosition(index, totalImages, baseRadius);

      const xPosition =
        index === data.length - 1 ||
        (index === (data.length / 3) * 2 - 1 && data.length !== 0)
          ? x - 40
          : index === 1 ||
            (index === Math.floor(data.length / 2) && data.length % 2 !== 0)
          ? x + 40
          : x;

      const yPosition =
        index === 0
          ? y - 40
          : index === data.length / 2
          ? y + 40
          : index === Math.floor(data.length / 2) && data.length % 2 !== 0
          ? y + 30
          : index === Math.ceil(data.length / 2) && data.length % 2 !== 0
          ? y + 30
          : y;
      const transformStyle = {
        transform: `translate(${data.length > 6 ? xPosition : x}px, ${
          data.length > 6 ? yPosition : y
        }px)`,
      };

      return (
        <li
          key={index}
          style={transformStyle}
          className={[
            classes.list,
            index > data.length / 2
              ? classes.highIndex
              : index < data.length / 2
              ? classes.lowIndex
              : "null",
            classes[`list${index + 1}`],
          ].join(" ")}
        >
          <div
            className={[classes.box].join(" ")}
            style={{
              "--bg": el.background,
              "--border": el.border,
              "--color": el.color,
            }}
          >
            <p className={classes.title}> {el.title}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div
      className={classes.mainContainer}
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        <div
          className={classes.wrapper}
          style={{
            width: wrapperSize,
            height: wrapperSize,
            borderRadius: "50%",
            "--border": border,
          }}
        >
          <div
            className={[classes.orbit, classes[`orbit${data.length}`]].join(
              " "
            )}
          >
            <ul>
              {data.length > 0 && (
                <ul className={classes.secondOrbit}>
                  {renderImages(data, true)}
                </ul>
              )}
            </ul>
          </div>
          <div className={classes.content}>adsfsd</div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
