import { useState } from 'react';
import { Art } from '../types';
import { useFetch } from './useFetch';

export const useArts = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const queryParams = searchTerm ? `?search=${searchTerm}` : '';
  const fetchResults = useFetch<Art[]>(
    `${process.env.REACT_APP_GALLERY_API_BASE_URL}/arts${queryParams}`,
    [searchTerm]
  );

  return { setSearchTerm, fetchResults };
};
