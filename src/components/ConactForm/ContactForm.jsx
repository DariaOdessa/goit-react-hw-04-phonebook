// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { FormWrapper, InputName, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  onFormChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleAddContact = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormWrapper>
        <form onSubmit={this.handleAddContact}>
          <InputName> Name</InputName>
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onFormChange}
          />
          <InputName>Number</InputName>
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onFormChange}
          />

          <Button type="submit">Add contact</Button>
        </form>
      </FormWrapper>
    );
  }
}
