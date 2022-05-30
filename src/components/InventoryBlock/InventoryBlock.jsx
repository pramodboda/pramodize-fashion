import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  Block,
  BlockContent,
  BlockContentAlign,
  BlockBackgroundImg,
} from "./InventoryBlock.styled.js";

const InventoryBlock = ({ title, btnTxt, bgImg }) => {
  return (
    <Block className="clearfix">
      <BlockContent>
        <BlockContentAlign>
          <Typography
            className="inventoryBlockTitleTxt"
            variant="h3"
            component="h3"
            sx={{ mb: 3 }}
          >
            {title}
          </Typography>
          {btnTxt ? (
            <Button
              variant="contained"
              disableElevation
              // sx={{ ml: -2.6, mr: 2 }}
            >
              {btnTxt}
            </Button>
          ) : (
            ""
          )}
        </BlockContentAlign>
      </BlockContent>
      <BlockBackgroundImg
        className="inventoryBlockBg"
        src={bgImg}
        alt={title}
      />
    </Block>
  );
};

export default InventoryBlock;
