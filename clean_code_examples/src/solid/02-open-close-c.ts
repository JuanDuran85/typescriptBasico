import axios from "axios";

export class HttpClient {
  public async get(urlIn: string) {
    const { data, status } = await axios.get(urlIn);
    return { data, status };
  }
}
