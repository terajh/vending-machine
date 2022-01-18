import React from "react";
import styled from "styled-components";

const BackGround = props => {
  return (
    <BackgroundView>
      <video width="320" height="240" autoPlay loop muted>
        <source
          src="https://assets.codepen.io/3364143/7btrrd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </BackgroundView>
  );
};

const BackgroundView = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default BackGround;
