import { FC } from 'react';
import { ChildrenProps } from '../../types';
import styles from './Loader.module.css';

const Loader: FC<ChildrenProps> = ({ children }) => {
    return <div className={styles.loader}>{children}</div>
};

export default Loader;
