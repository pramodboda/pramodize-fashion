import Grid from "@mui/material/Grid";

//Home
import InventoryBlock from "../../InventoryBlock/InventoryBlock";
import MaleFemaleInventoryBlock from "../../MaleFemaleInventoryBlock/MaleFemaleInventoryBlock";

import male1 from "../../../assets/images/men1.jpg";
import female1 from "../../../assets/images/female1.jpg";
import male2 from "../../../assets/images/men2.jpg";
import female2 from "../../../assets/images/female2.jpg";
import male3 from "../../../assets/images/men3.jpg";
import female3 from "../../../assets/images/female3.jpg";
import femaleDress1 from "../../../assets/images/femaleDress1.jpg";
import toGiftBgImg from "../../../assets/images/toGiftBgImg.jpg";
import makeup1 from "../../../assets/images/makeup-cosmetics/makeup1.jpg";

const Directory = () => {
  return (
    <div className="categories-container">
      <MaleFemaleInventoryBlock
        femaleImg={female1}
        maleImg={male1}
        title="Hardcore Denim"
        femaleBtnTxt="Shop Women's"
        maleBtnTxt="Shop Men's"
      />

      <MaleFemaleInventoryBlock
        femaleImg={female2}
        maleImg={male2}
        title="Pants"
        femaleBtnTxt="Shop Women's"
        maleBtnTxt="Shop Men's"
      />

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MaleFemaleInventoryBlock
            femaleImg={female3}
            maleImg={male3}
            title="Shorts"
            femaleBtnTxt="Shop Women's"
            maleBtnTxt="Shop Men's"
          />
        </Grid>
        <Grid item xs={4}>
          <InventoryBlock
            btnTxt="Shop Now"
            title="Dresses"
            bgImg={femaleDress1}
          />
        </Grid>
        <Grid item xs={4}>
          <InventoryBlock
            btnTxt="Shop Now"
            title="To Gift"
            bgImg={toGiftBgImg}
          ></InventoryBlock>
        </Grid>
        <Grid item xs={4}>
          <InventoryBlock
            btnTxt="Shop Now"
            title="Makeup Products"
            bgImg={makeup1}
          ></InventoryBlock>
        </Grid>
      </Grid>
    </div>
  );
};

export default Directory;
