import TextField from "@mui/material/TextField/TextField";
import PropTypes from "prop-types";

const AccountInput = (props) => {
  return <TextField label={props.label} variant="outlined" type={props.type} />;
};

AccountInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email"]),
};

export default AccountInput;
