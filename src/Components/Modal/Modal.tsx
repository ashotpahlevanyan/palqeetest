import React from 'react';
import { createUseStyles } from 'react-jss'

import { ModalPortal } from "./ModalPortal";
import useModal from './useModal';


const useStyles = createUseStyles({
    modalTest: {
        position: 'fixed',
        top: 0,
        left: 0,
        'z-index': 1040,
        width: '100vw',
        height: '100vh',
        'background-color': '#000',
        opacity: .5
    },
    buttonDefault: {
        background: '#247BA0',
        color: '#fff',
        'font-size': '.9rem',
        'font-weight': 700,
        border: 'none',
        'border-radius': '3px',
        padding: '.3rem 1rem',
        'margin-left': '.5rem'
    }
});

export const Modal = () => {
    const classes = useStyles();
    const {isShowing, toggle} = useModal();
    return (
        <div className={classes.modalTest}>
            <button className={classes.buttonDefault} onClick={toggle}>Show Modal</button>
            <ModalPortal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
};
