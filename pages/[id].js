/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import axios from '../component/Axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FoodDetail from '../component/FoodDetail';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  // const apiKey = process.env.NEXT_PUBLIC_KEY;
  const apiKey = 'icBngbwgTFe5YAmzOf4teKUNCLfUnbO3m8vFwM09';

  const url = `/food/${id}?api_key=${apiKey}`;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState('');
  const [hasError, setHasError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const res = await axios.get(url);
        setData(res.data);
        setIsLoading(false);
        return res;
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [setData, url, setIsLoading, setHasError, axios]);

  let desc;
  if (data && data.foodAttributes.hasOwnProperty(2)) {
    desc = data.foodAttributes[2].value;
  }
  return (
    <FoodDetail
      title={data && data.description}
      desc={desc}
      nuts={data && data.foodNutrients}
      foodCategory={data && data.wweiaFoodCategory.wweiaFoodCategoryDescription}
      loading={isLoading}
      error={hasError}
    />
  );
};
export default Details;
