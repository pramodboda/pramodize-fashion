import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div``;
export const CategoryTitle = styled(Link)``;
export const CategoryPreviewBlock = styled.div`
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
