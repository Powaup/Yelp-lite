import {useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState ([]);
    const [errorMessage, setErrorMessgae] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there!');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San Jose'
                }
            });
        setResults(response.data.businesses)
    }   catch (err) {
        setErrorMessgae('Something went wrong');
    }
};

// Call search API when component is first rendered
//Search.Api(pasta)
useEffect(() => {
    searchApi('pasta');
}, []);

 return [searchApi, results, errorMessage]
};