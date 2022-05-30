import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  Block,
  BlockContent,
  GenderBlock,
  BlockContentAlign,
  BlockBackgroundImg,
} from "./MaleFemaleInventoryBlock.styled";

const MaleFemaleInventoryBlock = ({
  maleImg,
  femaleImg,
  title,
  maleBtnTxt,
  femaleBtnTxt,
}) => {
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
          {femaleBtnTxt ? (
            <Button
              variant="contained"
              disableElevation
              sx={{ ml: -2.3, mr: 2 }}
            >
              {femaleBtnTxt}
            </Button>
          ) : (
            ""
          )}

          {maleBtnTxt ? (
            <Button variant="contained" disableElevation>
              {maleBtnTxt}
            </Button>
          ) : (
            ""
          )}
        </BlockContentAlign>
      </BlockContent>

      <GenderBlock className="clearfix">
        <BlockBackgroundImg
          className="inventoryBlockBg"
          src={femaleImg}
          alt={title}
        />
      </GenderBlock>
      <GenderBlock className="clearfix">
        <BlockBackgroundImg
          className="inventoryBlockBg"
          src={maleImg}
          alt={title}
        />
      </GenderBlock>
    </Block>
  );
};
export default MaleFemaleInventoryBlock;
