import { FC } from "react";
import { ChildrenProps } from "../../types";
import styles from './CentralizedPage.module.css';

const CentralizedPage: FC<ChildrenProps> = ({ children }) => {
    return (
        <div className={styles.centralizedPage}>
            {children}
        </div>
    );
};

export default CentralizedPage;
