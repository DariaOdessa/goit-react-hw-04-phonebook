import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onRemoveClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Box as="li" mb={3} key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onRemoveClick={onRemoveClick}
          />
        </Box>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};
