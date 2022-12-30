import axios from "axios";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";
const beseUrl = "http://localhost:8080";
const API = {
  getAllCategorys: async () => {
    const res = await axios.get(`${BASE_URL}/categories.php`);
    return res.data;
  },
  getFilterCategorys: async (filterCategory) => {
    const res = await axios.get(`${BASE_URL}/filter.php?c=${filterCategory}`);
    // console.log(res.data)
    return res.data;
  },
  searchByName: async (searchQuery) => {
    const res = await axios.get(`${BASE_URL}//search.php?s=${searchQuery}`);
    return res.data;
  },
  searchByLetter: async (searchQuery) => {
    const res = await axios.get(`${BASE_URL}//search.php?f=${searchQuery}`);
    return res.data;
  },
  openById: async (ID) => {
    const res = await axios.get(`${BASE_URL}//lookup.php?i=${ID}`);
    return res.data;
  },
  addUser: async (arr) => {
    const res = await axios.get(`${beseUrl}/${arr}`);
    return res.data;
  },
  addCard: async (addUser) => {
    const res = await axios.post(`${beseUrl}/${addUser}`);
    return res.data
  }
};
export default API;
