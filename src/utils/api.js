import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchData = async (thunkAPI, category) => {
  try {
    const [shirts, watches, shoes] = await Promise.all([
      axios.get(`${API_URL}/mens-shirts`),
      axios.get(`${API_URL}/mens-watches`),
      axios.get(`${API_URL}/mens-shoes`),
    ]);
    return {
      shirts: shirts.data.products,
      watches: watches.data.products,
      shoes: shoes.data.products,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
