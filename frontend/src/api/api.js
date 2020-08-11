import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "http://localhost:5000",
  headers: {
    "Access-Control-Allow-Headers": "*",
    Accept: "*/*",
  },
  timeout: 30000,
});

const getChemicalList = (chemicalName) => api.get(`/chemical/${chemicalName}`);

const getPatentList = (chemicalName, chemicalType) => api.get(`/patent/${chemicalName}/${chemicalType}`);


export default { getChemicalList, getPatentList };
