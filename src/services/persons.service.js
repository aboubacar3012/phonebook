import axios from "axios";

const baseUrl = "https://phonebook-backend-xi.vercel.app/api/persons";
// const baseUrl = "http://localhost:8080/api/persons";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data);
  return response.data;
};
const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};
const update = async (id, num) => {
  await axios.patch(`${baseUrl}/${id}`, { number: num });
};

const deleteById = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};
export default { getAll, create, update, deleteById };
