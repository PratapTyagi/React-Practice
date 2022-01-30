import axios from "axios";

const URL = "https://randomuser.me/api/";

export const userDataFunction = async (page) => {
  try {
    const {
      data: { results },
    } = await axios.get(`${URL}?page=${page}`);
    return results;
  } catch (error) {
    console.log(error);
  }
};
