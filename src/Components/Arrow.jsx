import React from "react";
import styled, { css } from "styled-components";

const Arrow = ({ direction = "right", onClick }) => {
  return (
    <StyledWrapper direction={direction} onClick={onClick}>
      <div className="arrow">
        <div className={`arrow-top ${direction}`} />
        <div className={`arrow-bottom ${direction}`} />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  top: 50%;
  z-index: 1001;

  ${(props) =>
    props.direction === "left"
      ? css`left: 2vw;`
      : css`right: 2vw;`}
  transform: translateY(-50%);

  .arrow {
  cursor: pointer;
  height: 60px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform 0.1s;
  width: 50px;
}

.arrow-top, .arrow-bottom {
  background-color: #666;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;
}

.arrow-top:after, .arrow-bottom:after {
  background-color: #fff;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.15s;
}
/* Left arrow */
.arrow-top.left {
  transform: rotate(-45deg);
  transform-origin: bottom left;
}

.arrow-bottom.left {
  transform: rotate(45deg);
  transform-origin: top left;
}
.arrow-top {
  transform: rotate(45deg);
  transform-origin: bottom right;
}

.arrow-top:after {
  left: 100%;
  right: 0;
  transition-delay: 0s;
}

.arrow-bottom {
  transform: rotate(-45deg);
  transform-origin: top right;
}

.arrow-bottom:after {
  left: 0;
  right: 100%;
  transition-delay: 0.15s;
}

.arrow:hover .arrow-top:after {
  left: 0;
  transition-delay: 0.15s;
}

.arrow:hover .arrow-bottom:after {
  right: 0;
  transition-delay: 0s;
}

.arrow:active {
  transform: translateX(-50%) translateY(-50%) scale(0.9);
}`;

export default Arrow;
