import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, { errorPolicy: 'all' });
  const [load, setLoading] = useState(false);
  
  const fetchRepositories = async () => {

    setLoading(true);
    
    
    
    // const response = await fetch('http://192.168.42.216:5000/api/repositories');
    // const json = await response.json();
    // console.log(json);
    
    // setLoading(false);
    // setRepositories(json);
    
    


    // console.log(loading);
    // console.log(data);
    // console.log(data.repositories);
    // console.log(error);
    if (loading) {
      console.log('Loading======================');
    }

    if (data !== undefined && loading === false) {
      console.log('proced ---------------------->')
      setRepositories(data.repositories);
    }    
  };

  useEffect(() => {
    fetchRepositories();
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
}

export default useRepositories;
