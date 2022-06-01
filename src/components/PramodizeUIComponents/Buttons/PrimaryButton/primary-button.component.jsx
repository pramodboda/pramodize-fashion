import Button from "@mui/material/Button";

const PrimaryButton = ({ children, ...otherProps }) => {
  return (
    <Button variant="contained" disableElevation {...otherProps}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
