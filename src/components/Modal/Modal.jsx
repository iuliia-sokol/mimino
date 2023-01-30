import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import { TfiClose } from 'react-icons/tfi';

import { ModalOverlay, ModalWindow, CloseBtn } from './Modal.styled';
import { ModalFormTable } from './ModalFormTable';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, status, name, number, date, persons }) => {
  useEffect(() => {
    const onEscPress = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={onBackdropClick}>
      <ModalWindow>
        <CloseBtn type="button" onClick={closeModal}>
          <TfiClose />
        </CloseBtn>
        {status === 'table' && <ModalFormTable closeModal={closeModal} />}
        {/* {status === 'confirmTable' && (
          <ModalConfirmation
            closeModal={closeModal}
            name={name}
            number={number}
            date={date}
            persons={persons}
          />
        )} */}
      </ModalWindow>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  // id: propTypes.string.isRequired,
  // name: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
};