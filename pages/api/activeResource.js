import axios from "axios";

export default async function ActiveResource(req, res) {
  const axiosRes = await axios.get(`${process.env.API_URL}/activeResource`);
  const resource = await axiosRes.data;

  return res.send(resource)
}