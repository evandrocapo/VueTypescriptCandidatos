import axios from "axios";
const URLBase = "https://dadosabertos.camara.leg.br/api/v2";

function fetch(url: string): Promise<any> {
  return axios.get<any>(`${URLBase}${url}`);
}

export { fetch };
