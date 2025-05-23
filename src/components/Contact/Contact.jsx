import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { Button } from '@mui/material';
import {
  openDeleteModal,
  openEditModal,
  setContactToDelete,
} from '../../redux/contacts/slice';
import EditModal from '../Modals/EditModal';
import DeleteModal from '../Modals/DeleteModal';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(openEditModal(contact));
  };

  const handleDeleteClick = () => {
    dispatch(setContactToDelete(contact.id));
    dispatch(openDeleteModal());
  };

  return (
    <>
      <EditModal />
      <DeleteModal />
      <div className={css.container}>
        <div className={css.contact}>
          <p>
            <FaUser className={css.margin} size={20} />
            {contact.name}
          </p>
          <p>
            <FaPhoneAlt className={css.margin} size={20} />
            {contact.number}
          </p>
        </div>
        <div className={css.btnBox}>
          <Button
            variant='contained'
            color='primary'
            type='button'
            className={css.btnEdit}
            onClick={handleEditClick}
          >
            Edit
          </Button>

          <Button
            variant='contained'
            color='error'
            type='button'
            className={css.btn}
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default Contact;
