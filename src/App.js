import React, { useEffect, useState } from "react";
import Marquee from "./lib/index"
import axios from "axios";
import {
  Header,
  Code,
  Version,
  ButtonWrapper,
  ViewOnGithub,
  ViewOnNpm,
  Browser,
  Footer
} from "./styled";
import { FaGithub, FaNpm } from "react-icons/fa";
import { GiMeshBall } from "react-icons/gi";
import "./App.css";

// require("babel-polyfill");

const API_ENDPOINT =
  "https://raw.githubusercontent.com/masonwongcs/react-simple-marquee/master/package.json";

const App = () => {
  const [version, setVersion] = useState("1.0.0");
  async function getVersion() {
    await axios.get(API_ENDPOINT).then(response => {
      const { data } = response;
      const currentVersion = data.version;
      setVersion(currentVersion);
    });
  }

  useEffect(() => {
    getVersion();
  });

  return (
    <div className="app">
      <Header>
        <h3>
          <GiMeshBall className="animate-logo" />
          React Simple Marquee
        </h3>
        <p>A very simple React component build with pure CSS</p>
      </Header>
      <Code>npm install react-simple-marquee --save</Code>
      <ButtonWrapper>
        <ViewOnGithub
          target="_blank"
          href="https://github.com/masonwongcs/react-simple-marquee"
        >
          <FaGithub />
          View on GitHub
        </ViewOnGithub>
        <ViewOnNpm
          target="_blank"
          href="https://www.npmjs.com/package/react-simple-marquee"
        >
          <FaNpm />
          View on npm
        </ViewOnNpm>
      </ButtonWrapper>
      <Version>Current version: {version}</Version>
      <main>
        <Browser>
          <div className="browser-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="browser-container">
            <div className="block-wrapper">
              <div className="block small" />
              <div className="block large" />
            </div>
            <div className="block line" />
            <div className="block line" />
            <Marquee
              style={{
                height: "2rem",
                lineHeight: "2rem"
              }}
              direction={"left-right"}
            >
              This is a very simple marquee
            </Marquee>
            <div className="block line" />
            <div className="block line" />
            <div className="block line" />
            <div className="block line" />
            <Marquee
              style={{
                height: "2rem",
                lineHeight: "2rem",
                color: "#aaa"
              }}
              speed={3}
            >
              This is a another marquee with the speed of 3x and custom style
            </Marquee>
            <div className="block line" />
            <div className="block line" />
            <div className="block line" />
          </div>
        </Browser>
      </main>
      <Footer>
        Created by{" "}
        <a target="_blank" href="https://github.com/yapitw">
          <FaGithub />
          yapi
        </a>
        <a target="_blank" href="https://github.com/masonwongcs">
          <FaGithub />
          masonwongcs
        </a>
        <a target="_blank" href="https://github.com/kevinkam">
          <FaGithub />
          kevinkam
        </a>
      </Footer>
      {/*<Carbon src="https://carbon.now.sh/embed?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=sharp&l=jsx&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=133%25&si=false&es=2x&wm=false&code=import%2520*%2520as%2520React%2520from%2520%2522react%2522%253B%250Aimport%2520ReactDOM%2520from%2520%2522react-dom%2522%253B%250Aimport%2520Marquee%2520from%2520%2522react-simple-marquee%2522%253B%250A%250Aclass%2520App%2520extends%2520React.Component%2520%257B%250A%2520%2520render()%2520%257B%250A%2520%2520%2520%2520return%2520(%250A%2520%2520%2520%2520%2520%2520%253CMarquee%250A%2520%2520%2520%2520%2520%2520%2520%2520speed%253D%257B2%257D%2520%252F%252F%2520Speed%2520of%2520the%2520marquee%2520(Optional)%250A%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253A%252030%2520%252F%252F%2520Your%2520own%2520styling%2520(Optional)%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Your%2520text%2520here%250A%2520%2520%2520%2520%2520%2520%253C%252FMarquee%253E%250A%2520%2520%2520%2520)%253B%250A%2520%2520%257D%250A%257D%250A%250AReactDOM.render(%253CApp%2520%252F%253E%252C%2520document.getElementById(%2522root%2522))%253B%250A"></Carbon>*/}
    </div>
  );
};

export default App;
