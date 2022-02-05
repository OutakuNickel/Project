import React from "react";
import Group from "../../Pictures/Group 158.png";
import Logo from "../../Pictures/NESTSCHOOL.png";
import styled from "styled-components";
import Be1OfTenK from "../../Pictures/Be 1 of the 10k.png";
import Description from "../../Pictures/NEST Academy is nurturing a passion for tech and development in 10’000 young IT engineers who will pioneer the developments of the tech industry.png";
import { Link } from "react-router-dom";
import Icon from "../../Pictures/reading 1.png";

const StyledNavBar = styled.div`
  height: 30px;
  width: 500px;
  background-color: transparent;
  padding: 10px;
  color: #333740;
  margin-left: 670px;
  position: absolute;
  color: #333740;
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
const Image = styled.img`
  width: 46vw;
  height: 100vh;
  position: absolute;
  margin-top: 0px;
`;

const Banner = styled.img`
  width: 9vw;
  height: 3vh;
  position: absolute;
  top: 40px;
  left: 80px;
`;

const TenK = styled.img`
  width: 25vw;
  height: 20vh;
  position: absolute;
  left: 660px;
  top: 230px;
`;

const Discription = styled.img`
  left: 660px;
  top: 385px;
  position: absolute;
  height: 7vh;
  width: 25vw;
`;

const Book = styled.img`
  position: absolute;
  width: 4vw;
  height: 9vh;
  top: 18px;
  left: 25px;
`;

export default function LandingPage() {
  return (
    <div>
      <StyledNavBar>
        <ul>
          <Link
            style={{
              textDecoration: "none",
              color: "#333740",
              fontFamily: "Andale Mono, monospace	",
              fontSize: "20px",
            }}
            to="/events"
          >
            Events
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "azure",
              border: "#333740 solid 2px",
              background: "#333740",
              borderRadius: "15px",
              width: "10vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Andale Mono, monospace",
              fontSize: "20px",
            }}
            to="/login"
          >
            Login
          </Link>
        </ul>
      </StyledNavBar>
      <div>
        <Image src={Group} />
      </div>
      <div>
        <Book src={Icon} />
      </div>
      <div>
        <Banner src={Logo} />
      </div>
      <div>
        <div>
          <TenK src={Be1OfTenK} />
        </div>
        <div>
          <Discription src={Description} />
        </div>
        <div
          style={{
            fontFamily: "Andale Mono, monospace",
            color: "white",
            border: "#333740 1px solid",
            backgroundColor: "#333740",
            position: "absolute",
            left: "660px",
            top: "457px",
            borderRadius: "30px",
            width: "19vw",
            height: "8vh",
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          GET STARTED
        </div>
        <div
          style={{
            color: "#333740",
            position: "absolute",
            left: "720px",
            top: "520px",
            fontSize: "14px",
          }}
        >
          or directly{" "}
          <Link id="register" to="/register" style={{ color: "#333740" }}>
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
