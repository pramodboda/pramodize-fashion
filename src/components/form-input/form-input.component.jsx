import TextField from "@mui/material/TextField";

const FormInput = ({ label, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div>
      {label && <label>{label}</label>}
      <br />
      <TextField
        label={label}
        {...otherProps}
        variant="filled"
        size="small"
        fullWidth
      />
    </div>
  );
};

export default FormInput;
