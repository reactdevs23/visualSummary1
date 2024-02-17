import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  topHeader,
  data,
  mainIcon,
  border,
  circleBg,
  heading,
  headingColor,
  subHeading,
  subHeadingColor,
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

      const transformStyle = {
        transform: `translate(${x}px, ${
          data.length === 3 && index === 0 ? y + 50 : y
        }px)`,
      };

      return (
        <li key={index} style={transformStyle} className={classes.boxWrapper}>
          <div
            className={[
              classes.infoContainer,
              index === 0 && classes.firstElement,
              classes[`infoContainer${index + 1}`],
              index < Math.ceil(data.length / 2) && classes.lessInfoContainer,
            ].join(" ")}
          >
            {el.infoWrapper.map((el, i) => (
              <div className={classes.info} key={i}>
                <div className={classes.icon}>{el.icon}</div>
                <p className={classes.text}>{el.info}</p>
              </div>
            ))}
          </div>

          <div
            className={[classes.box].join(" ")}
            style={{
              "--bg": el.background,
              "--border": el.border,
              "--color": el.color,
              "--boxShadow": el.boxShadow,
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
      <div className={classes.topHeader}>
        <h5
          className={classes.subHeading}
          style={{ "--color": topHeader.subHeadingColor }}
        >
          {topHeader.heading}
        </h5>
        <h2
          className={classes.heading}
          style={{ "--color": topHeader.headingColor }}
        >
          {topHeader.heading}
        </h2>
      </div>
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
          <div className={classes.orbit}>
            {data.length > 0 && (
              <ul
                className={[
                  classes.secondOrbit,
                  classes[`orbit${data.length}`],
                ].join(" ")}
              >
                {renderImages(data, true)}
              </ul>
            )}
          </div>
          <div className={classes.content} style={{ "--bg": circleBg }}>
            <div className={classes.textContainer}>
              <div className={classes.mainIcon}>{mainIcon}</div>
              <h3 className={classes.title} style={{ "--color": headingColor }}>
                {heading}
              </h3>
              <p
                className={classes.tagline}
                style={{ "--color": subHeadingColor }}
              >
                {subHeading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
