import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  // const { data, error, loading } = useQuery(GET_REPOSITORIES);
  const result = useQuery(GET_REPOSITORIES);
  const [loading, setLoading] = useState(false);
  console.log(result);
  
  const fetchRepositories = async () => {

    // if (loading) {
    //   console.log('Loading======================');
    // }

    // console.log(data);
    // console.log(error);
    // console.log(loading);



    const response = await fetch('http://192.168.42.230:5000/api/repositories');
    const json = await response.json();
    // console.log(json);

    // json = data.repositories;

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
}

export default useRepositories;
