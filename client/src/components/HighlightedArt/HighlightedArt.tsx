import { FC } from "react";
import styles from './HighlightedArt.module.css';

type Props = {
    url: string;
}

const HighlightedArt: FC<Props> = ({ url }) => {
    return <img src={url} alt="Art" className={styles.highlightedImg} />
};

export default HighlightedArt;
