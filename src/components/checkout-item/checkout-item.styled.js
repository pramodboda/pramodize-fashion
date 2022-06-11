import styled from "styled-components";

import { grey } from "@mui/material/colors";

export const CheckoutCartItem = styled.div`
  border-bottom: 1px solid ${grey[400]};
  padding: 6px;
  display: flex;
`;

export const CheckOutItemImg = styled.img`
  width: 150px;
  /* height: 500px;
  border: 1px solid red; */
`;

export const CheckoutCartItemInfo = styled.div`
  /* border: 1px solid red; */
  padding: 6px;
  width: 100%;
  position: relative;
`;

export const CheckoutCartItemClearIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
