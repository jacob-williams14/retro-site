import { useEffect, useState } from 'react';
import { sanityClient } from './sanityClient';

const useSanityFetchData = (schemaType: string) => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "${schemaType}"]`;
        const result = await sanityClient.fetch(query);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Sanity data:', error);
      }
    };

    fetchData();
  }, [schemaType]);

  return { data, loading };
};

export default useSanityFetchData;
