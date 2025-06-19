import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styless from "./Contact.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { Field, Form, Formik } from "formik";

const Contact = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    toast(`Contact deleteded ${id}`);
  };

  const handleChangeContact = (values, actions) => {
    setIsEditing(false);
    console.log({ id: contact.id, contact: { ...values } });

    dispatch(editContact({ id: contact.id, contact: { ...values } }));
    toast(`Contact ${contact.name} changed`);
    actions.reset;
  };
  return (
    <>
      <div className={styless.container}>
        <div className={styless.item}>
          {!isEditing ? (
            <>
              <p>
                <FaUser size="24" />
                {contact.name}
              </p>
              <p>
                <FaPhoneAlt size="24" />
                {contact.number}
              </p>
            </>
          ) : (
            <Formik
              initialValues={{ name: contact.name, number: contact.number }}
              onSubmit={handleChangeContact}
            >
              <Form>
                <Field type="text" name="name" />
                <Field type="text" name="number" />
                <button type="submit">Save</button>
              </Form>
            </Formik>
          )}
        </div>
        {!isEditing && (
          <button
            type="button"
            className={styless.button}
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}
        <button
          type="button"
          className={styless.button}
          onClick={() => handleDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
