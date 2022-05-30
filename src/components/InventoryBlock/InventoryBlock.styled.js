import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const BlockContent = styled.div`
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 2;

  &::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  & h3 {
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    color: #f9f9f9;
  }
`;

export const BlockContentAlign = styled.div`
  display: inline-block;
  /* font-size: 13px; */
  text-align: center;
  vertical-align: middle;
  width: 100%;
  z-index: 3;
`;

export const BlockBackgroundImg = styled.img`
  width: 100%;

  &.inventoryBlockBg {
    filter: opacity(0.6);
  }
`;
