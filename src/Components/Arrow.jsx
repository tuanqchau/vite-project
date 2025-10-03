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
  transform: translateY(-50%);

  /* Position arrows close to edges */
  ${(props) =>
    props.direction === "left"
      ? `left: 5px;` // very close to left edge
      : `right: 5px;`} // very close to right edge

  .arrow {
    height: 50px;
    width: 40px;
    position: relative;
    transform: none; /* remove translateX(-50%) */
    transition: transform 0.1s;

    @media (max-width: 768px) {
      height: 35px;
      width: 25px;
    }

    @media (max-width: 480px) {
      height: 25px;
      width: 20px;
    }
  }

  .arrow-top,
  .arrow-bottom {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #666;

    @media (max-width: 768px) {
      height: 3px;
    }

    @media (max-width: 480px) {
      height: 2px;
    }
  }

  /* Arrow rotations */
  .arrow-top.left {
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
  .arrow-bottom.left {
    transform: rotate(45deg);
    transform-origin: top left;
  }

  .arrow-top.right {
    transform: rotate(45deg);
    transform-origin: bottom right;
  }
  .arrow-bottom.right {
    transform: rotate(-45deg);
    transform-origin: top right;
  }

  /* Hover effects */
  .arrow-top:after,
  .arrow-bottom:after {
    content: "";
    position: absolute;
    height: 100%;
    background-color: #fff;
    transition: all 0.15s;
  }

  .arrow-top:after {
    left: 100%;
    right: 0;
    transition-delay: 0s;
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
    transform: scale(0.9);
  }
`;


export default Arrow;
