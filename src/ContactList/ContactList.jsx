import { useSelector } from 'react-redux';
import {
  getFilterFromState,
  getVisibleContacts,
} from '../redux/contacts-app/contacts-selectors';
import { useFetchContactsQuery } from '../redux/contacts-app/contacts-operations';
import ContactItem from '../ContactItem/ContactItem.jsx';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilterFromState);

  const filteredContacts = getVisibleContacts({ data, filter });

  return (
    <ul className={s.contactsList}>
      {isFetching && (
        <div className={s.container}>
              </div>
          )}
          {data &&
              filteredContacts.map(contacts => (
                  <ContactItem key={contacts.id} {...contacts} />
              ))}
      </ul>
    );
};
    
export default ContactList;