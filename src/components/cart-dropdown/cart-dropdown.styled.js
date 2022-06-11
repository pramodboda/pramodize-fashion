import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 340px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #ffffff;
  /* Add the blur effect */
  overflow-y: scroll;

  top: 90px;
  right: 0;
  z-index: 4;
`;

// export const CartItems = styled.div``;
