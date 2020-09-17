import React from "react";
import calendar from "./images/cutecalendar.png";

export function SideBar() {
  return (
    <>
      <span style={styles.sideBar}>
        <ul style={styles.sideBar}>
          <img style={styles.calimg} alt="date" src={calendar}></img>
          <li>Calendar</li>
          <li>Previous</li>
          <li>Share</li>
        </ul>
      </span>
    </>
  );
}

export function Nav({ profile }) {
  return (
    <nav>
      <img alt="january" src={profile.profileImg} style={styles.avatar}></img>
    </nav>
  );
}

export default Nav;

const styles = {
  avatar: {
    height: "40px",
    width: "60px",
    borderRadius: "50%",
    margin: "5%",
  },
  sideBar: {
    margin: "5%",
    color: "#BE92A2",
    fontSize: "20px",
    listStyle: "none",
    // backgroundColor: "#D8e1ff",
  },
  calimg:{
    width:"30px",
  }
};
