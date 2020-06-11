import Modal from './Modal/Modal';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import NoteModal from './NoteModal/NoteModal';
import { modalTypes } from '../../constants/modal-types';

const concreteModals = {
    [modalTypes.note]: NoteModal,
    [modalTypes.confirm]: ConfirmModal
};

export { Modal, concreteModals };
