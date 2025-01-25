import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProductsByCategories = async (thunkAPI, categories) => {
  try {
    // Fetch all categories in parallel
    const responses = await Promise.all(
      categories.map((cat) =>
        axios.get(`${API_URL}/products/category/${cat}`).then((res) => res.data.products)
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