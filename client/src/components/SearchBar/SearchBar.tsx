import { ChangeEvent, FC } from 'react';
import styles from './SearchBar.module.css';
import icon from '../../assets/search-icon-removebg-preview.png';

type Props = {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: FC<Props> = ({ onSearch }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className={styles.searchContainer}>
            <img src={icon} alt="Search Icon" className={styles.searchIcon} />
            <input
                type="text"
                onChange={handleChange}
                placeholder="What are you looking for?"
                className={styles.searchInput}
            />
        </div>
    );
};

export default SearchBar;
