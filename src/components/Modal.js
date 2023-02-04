import React from 'react';

//Styles
import styles from './Modal.module.css'

//Component
import UserForm from "./shared/UserForm";


const Modal = ({setIsOpen}) => {

    return (
        <div className={styles.container}>
            <UserForm open={setIsOpen} />
        </div>
    );
};

export default Modal;
