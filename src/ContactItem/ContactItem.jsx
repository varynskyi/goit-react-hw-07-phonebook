import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../redux/contacts-app/contacts-operations';
import toast from 'react-hot-toast';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  const contactDelete = (contactId, name) => {
    deleteContact(contactId);
    toast.success(`${name} delete with Contacts!`);
  };

  return (
        <li key={id} className={s.item}>
          <span>{name}:</span>
          <span>{number}</span>
          <span>
            <button
              className={s.btn}
              type="button"
              onClick={() => contactDelete(id, name)}
            >
              delete
            </button>
          </span>
        </li>
  );
};
  
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
