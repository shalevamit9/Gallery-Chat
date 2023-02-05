import { FC } from 'react';
import styles from './Art.module.css';
import { Art as ArtType } from '../../types';
import { Link } from 'react-router-dom';

type Props = {
  art: ArtType;
};

const Art: FC<Props> = ({ art: { artistName, description, name, url, id } }) => {
  return (
    <Link to={`${id}`}>
      <div className={styles.card}>
        <img src={url} alt="Art" />
        <p>{name}</p>
        <p className={styles.artistName}>By {artistName}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Art;
