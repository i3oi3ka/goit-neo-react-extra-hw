import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactsList.module.css";
import { ClipLoader } from "react-spinners";
import {
  selectContactError,
  selectContactLoading,
  selectContacts,
} from "../../redux/contacts/selectors";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  color: "#ffffff",
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  //   const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectContactLoading);
  const error = useSelector(selectContactError);
  return (
    <>
      <ClipLoader
        color={override.color}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {error && <p>{error}</p>}
      {!isLoading &&
        !error &&
        (contacts.length > 0 ? (
          <ul className={style.container}>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
        ) : (
          <p>Contact book empty</p>
        ))}
    </>
  );
};

export default ContactList;
