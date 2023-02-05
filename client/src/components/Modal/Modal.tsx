import { FC, KeyboardEventHandler, useEffect, useRef } from "react";
import styles from './Modal.module.css';

type Props = {
    onSave(value: string): void;
}

const Modal: FC<Props> = ({ onSave }) => {
    const usernameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        usernameInputRef.current?.focus();
    }, [])

    const handleClick = () => {
        const username = usernameInputRef.current?.value;
        if (!username) {
            return alert('Your username canno\'t be empty');
        }

        onSave(usernameInputRef.current.value);
    };

    const handleKeyPressed: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
        if (key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2>Enter Your Username</h2>
                </div>
                <div>
                    <label>
                        Please enter your username:
                        <input ref={usernameInputRef} type="text" placeholder="username" onKeyDown={handleKeyPressed} />
                    </label>
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={handleClick}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
