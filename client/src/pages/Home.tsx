import { FC } from 'react';
import { Arts, Loader, SearchBar } from '../components';
import { useFetch, useArts } from '../hooks';
import { Art } from '../types';
import InternalServerError from './InternalServerError';

type UseFetchResponse = ReturnType<typeof useFetch<Art[]>>

const getHomePageRenderContent = ({ error, response, isLoading }: UseFetchResponse) => {
    let render;
    if (isLoading) {
        render = <Loader>Loading...</Loader>;
    } else if (error) {
        render = <InternalServerError />;
    } else if (response) {
        render = <Arts arts={response} />;
    }

    return render;
};

const Home: FC = () => {
    const { setSearchTerm, fetchResults } = useArts();

    const handleSearch = (updatedSearchTerm: string) => {
        setSearchTerm(updatedSearchTerm);
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {getHomePageRenderContent(fetchResults)}
        </>
    );
};

export default Home;
