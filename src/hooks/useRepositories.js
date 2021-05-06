import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { errorPolicy: 'all' });
  // const result = useQuery(GET_REPOSITORIES, { errorPolicy: 'all' });
  // const [loading, setLoading] = useState(false);
  // console.log(result);
  
  const fetchRepositories = async () => {

    // if (loading) {
    //   console.log('Loading======================');
    // }

    
    console.log(loading);
    console.log(data);
    console.log(error);

    const response = await fetch('http://192.168.42.182:19000/5000/api/repositories');
    console.log(response);
    const json = await response.json();

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
}

export default useRepositories;
