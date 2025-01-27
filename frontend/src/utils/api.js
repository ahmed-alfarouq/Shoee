import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;

export const fetchProductsByCategories = async (thunkAPI, categories) => {
  try {
    // Fetch all categories in parallel
    const responses = await Promise.all(
      categories.map((cat) =>
        axios
          .get(`${API_URL}/products/category/${cat}`)
          .then((res) => res.data.products)
      )
    );

    // Flatten the array of product arrays into a single array
    const allProducts = responses.flat();

    return allProducts;
  } catch (error) {
    // Return a detailed error for debugging
    return thunkAPI.rejectWithValue({
      message: error.message,
      stack: error.stack,
    });
  }
};

export const userLogin = async (thunkAPI, userData) => {
  try {
    const res = await axios.post(`${AUTH_API_URL}/login`, userData);
    return res.data;
  } catch (error) {
    // I use this way because of axios
    const errorMessage =
      error.response && error.response.data && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    return thunkAPI.rejectWithValue({
      message: errorMessage,
      stack: error.stack,
    });
  }
};

export const createNewUser = async (thunkAPI, userData) => {
  try {
    const res = await axios.post(`${AUTH_API_URL}/signup`, userData);
    return res.data;
  } catch (error) {
    // I use this way because of axios
    const errorMessage =
      error.response && error.response.data && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    console.log(error);
    return thunkAPI.rejectWithValue({
      message: errorMessage,
      stack: error.stack,
    });
  }
};
