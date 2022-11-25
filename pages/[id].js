/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import axios from '../component/Axios';
import FoodDetail from '../component/FoodDetail';

const Details = ({ data }) => {
  console.log('data', data);
  let desc;
  if (data && data.foodAttributes?.hasOwnProperty(2)) {
    desc = data.foodAttributes[2].value;
  }
  return (
    <FoodDetail
      title={data && data.description}
      desc={desc}
      nuts={data && data.foodNutrients}
      foodCategory={
        data && data.wweiaFoodCategory?.wweiaFoodCategoryDescription
      }
      loading={false}
      error={false}
    />
  );
};
export default Details;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const APIKEY = process.env.APIKEY;
  const url = `/food/${id}?api_key=${APIKEY}`;
  const res = await axios.get(url);
  return {
    props: {
      data: res.data,
    },
  };
}
