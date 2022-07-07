import styled from "styled-components";
import PrimaryButton from "../../components/PramodizeUIComponents/Buttons/PrimaryButton/primary-button.component";

export const AddToBagBtn = styled(PrimaryButton)`
  position: absolute !important;
  bottom: 2%;
  left: 0;
  right: 0;
  margin: 12px !important;
  display: none !important;
`;

export const ProductCardContainer = styled.div`
  border: 1px solid #cccccc;
  position: relative;
  width: 100%;

  &:hover ${AddToBagBtn} {
    display: block !important;
  }
`;

export const ProductCardImgContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
`;

export const ProductCardImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export const ProductCardInfo = styled.div`
  /* border: 1px solid red; */
  padding: 6px;
`;
