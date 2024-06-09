import axios from "axios";

const searchBooks = async (input: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`, {   // Vite não usa proccess.env
      params: {
        search: input,
      },
    });
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export default searchBooks;
