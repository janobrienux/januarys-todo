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
    <nav style={styles.topNav}>
      <img alt="january" src={profile.profileImg} style={styles.avatar}></img>
    </nav>
  );
}

export default Nav;

const styles = {
  header: {
    color: "#BE92A2",
    fontSize: "22px",
    // width: "100%",
    margin: "5%",
  },

  topNav: {
    backgroundColor: "#D8E1FF",
    display: "flex",
    justifyContent: "space-between",
    // width: "120%",
  },
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
