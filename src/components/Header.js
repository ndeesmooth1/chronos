import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav style={styles.nav}>
      <div className="nav-wrapper">
      <div className="logo" style={styles.logo}></div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <Link to="/" style={styles.link}>Active Task</Link>
          </li>
          <li style={{...styles.listItem, ...styles.border}}>
            <Link to="/tasks" style={styles.link}>All Tasks</Link>
          </li>
          <li style={{...styles.listItem, ...styles.border}}>
            <Link to="/settings" style={styles.link}>New Task </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

};

const styles = {
  nav: {
    background: "transparent",
    textAlign: "center",
    width: "100%",
    height:"5.5rem"
  },
  link: {
    color:"#010018",
    fontWeight:"500",
    fontSize:"0.625rem",
    fontFamily: "'Raleway',sans-serif",
    textDecoration: "none",
    textTransform: "uppercase"
  },
  logo: {
    width: "2.5rem",
    height: "3.125rem",
    background:"url('assets/logo.png')",
    backgroundSize:"contain",
    margin:"0.625rem auto 0"
  },
  list: {
    width:"100%",
    display:"flex",
    textDecoration:"none",
    listStyle:"none",
    padding:"0",
    fontSize:"0.9rem",
    lineHeight:"0.625rem"
  },
  listItem: {
    width:"33%",
    textAlign:"center",
    textDecoration:"none"
  },
  border: {
    borderLeft: "1px solid #ff0d7f"
  }
};