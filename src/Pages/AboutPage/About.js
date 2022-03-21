import React, { useRef } from "react";
import classes from "./About.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import Form from "../Contact Page/Form";

const About = () => {
  const missionRef = useRef(null);
  const historyRef = useRef(null);
  const descriptionRef = useRef(null);

  const scrollToMission = () => {
    return window.scrollTo({
      top: missionRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToHistory = () => {
    return window.scrollTo({
      top: historyRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToDescription = () => {
    return window.scrollTo({
      top: descriptionRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className={classes["contact-banner"]}>
        <h1>About Al-Furqan</h1>
        <p>
          Know more about Al-Furqan Secondary school.{" "}
          <span onClick={scrollToMission}>Our mission</span>, aims and
          objectives, <span onClick={scrollToHistory}>how we started </span> and
          many other vital information about the school including{" "}
          <span onClick={scrollToDescription}>who we are</span>.{" "}
        </p>
      </div>
      <div className={classes.history} ref={historyRef}>
        <h1>How it started</h1>
        <p>
          Few years ago, we observed that, it is a right for children to go to
          school and is required by law. However, it was not so for all children
          in our society because our community did not have many qualified
          schools for children to attend and become literate and also goes to a
          great deal of trouble and expense to provide such schools. That was
          when we found Al-furqan to solve the problem.{" "}
        </p>
      </div>

      <div className={classes.description} ref={descriptionRef}>
        <h1>Who we are</h1>
        <p>
          We are teachers or educators and stragtegists who are deeply involved
          in helping teenagres become role models in the society or even the
          country as at large. As we are the source of knowledge.{" "}
        </p>
      </div>

      <div ref={missionRef} className={classes.mission}>
        <h1>Our Mission</h1>
        <p>
          Our mission is to support teenagers with educational materials and
          mobilize staff and community in a new direction.We are missioned to
          enable our students pursue more ambitious goals as they grow up and
          become outstanding leaders in the society.
        </p>
      </div>
      <div>
        <Form />
      </div>
      <div>
        <AiOutlineArrowUp onClick={scrollToTop} className={classes.scroll} />
      </div>
    </React.Fragment>
  );
};

export default About;
