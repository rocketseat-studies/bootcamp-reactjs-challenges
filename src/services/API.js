import axios from "axios";

class Axios {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://api.github.com",
      timeout: 1000
    });
  }

  async getRepository(username, repositoryName) {
    return await this.instance.get(`/repos/${username}/${repositoryName}`);
  }
}

export default new Axios();
