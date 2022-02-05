import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.div`
  height: 40px;
  padding-left:100px,
  width: 100vw;
  margin: 0;
  background-color: transparent;
  padding: 10px;
  color: black;
  position: relative;
  border-bottom: #ededed 1px solid;
  color: black;
  /* display: flex;
  align-items:center;
  justify-content:space-evenly; */
  /* padding-bottompx; */
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <ul
        style={{
          paddingLeft: "500px",
    
        }}
      >
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/events">
          Events
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#333740",
            border: "#333740 solid 1.36px",
            borderRadius: "15px",
            width: "14vh",
            display: "flex",
            justifyContent: "center",
            height: "4.7vh",
          }}
          to="register"
        >
          Sign Up
        </Link>
      </ul>
    </StyledNavBar>
  );
}
