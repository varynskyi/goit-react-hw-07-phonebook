import { useState } from 'react';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../redux/contacts-app/contacts-operations';
import toast from 'react-hot-toast';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const doubleContact = data.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase()),
    );
    const variable = doubleContact && doubleContact.name.length === name.length;
    if (variable) {
      toast.error(`${name} is already in contacts`);
      return resetState();
    } else {
      toast.success(`${name} add to Contacts`);
      createContact({ name, number });
      resetState();
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label id={name} className={s.label}>
        Name
      </label>
      <input
        className={s.input}
        value={name}
        onChange={handleChangeName}
        type="text"
        name="name"
        placeholder="add name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label id={name} className={s.label}>
        Number
      </label>
      <input
        className={s.input}
        value={number}
        onChange={handleChangeNumber}
        type="tel"
        name="number"
        placeholder="add number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;


