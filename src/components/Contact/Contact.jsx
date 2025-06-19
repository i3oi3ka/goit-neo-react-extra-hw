import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styless from "./Contact.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import ModalWindow from "../ModalWindow/ModalWindow";

const Contact = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleDeleteBtn = () => {
    setIsOpenModal(true);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast(`Contact deleteded ${contact.id}`);
  };

  const handleChangeContact = (values, actions) => {
    setIsEditing(false);
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
        {!isEditing ? (
          <button
            type="button"
            className={styless.button}
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className={styless.button}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        )}
        <button
          type="button"
          className={styless.button}
          onClick={handleDeleteBtn}
        >
          Delete
        </button>
      </div>
      <ModalWindow
        modalIsOpen={isOpenModal}
        closeModal={handleCloseModal}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Contact;
