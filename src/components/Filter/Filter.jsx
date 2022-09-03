import PropTypes from 'prop-types';
import { InputName, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <>
    <InputName>Find contacts by name</InputName>
    <Input type="text" value={value} onChange={onChange} />
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
