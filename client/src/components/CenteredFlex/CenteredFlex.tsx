import { FC } from "react";
import { ChildrenProps } from "../../types";
import styles from './CenteredFlex.module.css';

const CenteredFlex: FC<ChildrenProps> = ({ children }) => {
    return (
        <div className={styles.centeredFlex}>
            {children}
        </div>
    );
};

export default CenteredFlex;
