import React from "react";
import styled from "styled-components";

const BackGround = props => {
  return (
    <BackgroundView>
      <video width="320" height="240" autoPlay loop muted>
        <source
          src="https://player.vimeo.com/external/499594106.hd.mp4?s=275368f554b977c8d814005d46e336856e1877f3&profile_id=170"
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
