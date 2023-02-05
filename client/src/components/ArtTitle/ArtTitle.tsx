import { FC } from 'react';
import styles from './ArtTitle.module.css';

type Props = {
    name: string;
    artistName: string;
};

const ArtTitle: FC<Props> = ({ artistName, name }) => {
    return (
        <div className={styles.container}>
            <span className={styles.artName}>{name}</span>
            <span className={styles.artistName}>By {artistName}</span>
        </div>
    );
};

export default ArtTitle;
