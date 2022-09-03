import PropTypes from 'prop-types';
import { Button, ContactName, ContactNumber } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onRemoveClick }) => {
  return (
    <>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => onRemoveClick(id)}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};
