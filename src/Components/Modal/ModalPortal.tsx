import React from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        'z-index': 1040,
        width: '100vw',
        height: '100vh',
        'background-color': '#000',
        opacity: .5
    },
    modalWrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        'z-index': 1050,
        width: '100%',
        height: '100%',
        'overflow-x': 'hidden',
        'overflow-y': 'auto',
        outline: 0,
    },
    modal: {
        'z-index': 100,
        background: '#fff',
        position: 'relative',
        margin: '1.75rem auto',
        'border-radius': '3px',
        'max-width': '500px',
        padding:' 2rem',
    },
    modalHeader: {
        display: 'flex',
        'justify-content': 'flex-end',
    },
    modalCloseButton: {
        'font-size': '1.4rem',
        'font-weight': 700,
        'line-height': 1,
        color: '#000',
        opacity: .3,
        cursor: 'pointer',
        border: 'none',
    }
});

type Props = {
    isShowing: boolean
    hide: () => void
}

export const ModalPortal: React.FC<Props> = ({ isShowing, hide }) => {
    const classes = useStyles();
    return isShowing ? ReactDOM.createPortal(
        <>
            <div className={classes.modalOverlay}/>
            <div className={classes.modalWrapper}
                 aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className={classes.modal}>
                    <div className={classes.modalHeader}>
                        <button type="button" className={classes.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <p>
                        Palqee Modal
                    </p>
                </div>
            </div>
        </>, document.body
    ) : null;
};
