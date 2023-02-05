import { FC } from 'react';
import { Art as ArtType } from '../../types';
import { Art } from '..';
import styles from './Arts.module.css';

type Props = {
    arts: ArtType[];
};

const Arts: FC<Props> = ({ arts }) => {
    return (
        <div className={styles.gridContainer}>
            {arts.map((art) => <Art art={art} key={art.id} />)}
        </div>
    );
}

export default Arts;
