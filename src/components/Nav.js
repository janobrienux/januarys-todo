import React from "react";

export function SideBar() {
  return (
    <>
      <span style={styles.sideBar}>
        <p>Calendar</p>
        <p>Previous</p>
        <p>Share</p>
      </span>
    </>
  );
}

export function Nav({ profile }) {
  return (
    <nav style={styles.topNav}>
      <img alt="january" src={profile.profileImg} style={styles.avatar}></img>
      <p style={styles.header}>{profile.user}</p>
    </nav>
  );
}

export default Nav;

const styles = {
  navContainer: {
    
  },
  header: {
    color: "#BE92A2",
    fontSize: "24px",
    width: "75%",
    display: "flex",
    justifyContent: "flex-end",
    margin: "5%",
  },

  topNav: {
    backgroundColor: "#D8E1FF",
    display: "flex",
    justifyContent: "space-between",
    width: "120%",
  },
  avatar: {
    height: "60px",
    width: "80px",
    borderRadius: "50%",
    margin: "5%",
  },
  sideTaskContainer: {
    height: "100%",
    width: "20%",
  },
  sideBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "#BE92A2",
    fontSize: "20px",
    height: "200",
    width: "40%",
    backgroundColor: "#D8e1ff",
  },
};
