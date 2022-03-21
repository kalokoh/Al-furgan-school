import classes from "./Header.module.css";
import React from "react";
import Menu from "./Menu";
import logo from "../Pages/StudentsPage/Images/Image (5)-1.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes["header-container"]}>
        <img src={logo} alt="school-logo" className={classes.logo} />
        <div>
          <p className={classes.heading}>AL-FURQAN SECONDARY SCHOOL</p>
          <p className={classes.motto}>The source of knowledge</p>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
