import styled from "styled-components";

export const ProductCardsContainer = styled.div`
  /* border: 1px solid red; */
  /* position: relative; */

  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 50px;
  transition: all ease-in-out 3s;
  border: 0;
`;
