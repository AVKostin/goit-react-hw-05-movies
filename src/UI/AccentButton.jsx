import PropTypes from "prop-types";
import { Button } from "./AccentButton.styled";

const AccentButton = ({ icon, title, onClick, type }) => (
  <Button type={type} onClick={onClick}>
    {title} {icon}
  </Button>
);

AccentButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default AccentButton
