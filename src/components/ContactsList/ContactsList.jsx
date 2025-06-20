import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactsList.module.css";
import { ClipLoader } from "react-spinners";
import {
  selectContactError,
  selectContactLoading,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectContactLoading);
  const error = useSelector(selectContactError);
  return (
    <>
      <Loader isLoading={isLoading} />
      {error && <p>{error}</p>}
      {!isLoading &&
        !error &&
        (contacts.length > 0 ? (
          <ul className={style.container}>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
        ) : !filter ? (
          <p>Contact book empty</p>
        ) : (
          <p>Search result empty</p>
        ))}
    </>
  );
};

export default ContactList;
