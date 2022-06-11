import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CheckoutContainer, CheckoutCartItems } from "./checkout.styled";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography component={"h5"} variant={"h5"}>
            Bag
          </Typography>
          <CheckoutCartItems>
            {cartItems.map((cartItem) => {
              return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}
          </CheckoutCartItems>
        </Grid>
        <Grid item xs={4}>
          <Typography component={"h5"} variant={"h5"}>
            Summary
          </Typography>
          <Grid container>
            <Grid item xs={8}>
              <Typography component={"p"} variant={"p"}>
                Subtotal
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography component={"p"} variant={"p"}>
                ${cartTotal}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={8}>
              <Typography component={"p"} variant={"p"}>
                Estimated Delivery & Handling
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography component={"p"} variant={"p"}>
                $0
              </Typography>
            </Grid>
          </Grid>
          <hr />
          <Grid container>
            <Grid item xs={8}>
              <Typography component={"p"} variant={"p"}>
                Total Amount
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography component={"p"} variant={"p"}>
                $0
              </Typography>
            </Grid>
          </Grid>
          <hr />
        </Grid>
      </Grid>
    </CheckoutContainer>
  );
};

export default Checkout;
