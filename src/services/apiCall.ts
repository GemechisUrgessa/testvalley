import axios from "axios";
// API 1) https://api.testvalley.kr/main-banner/all
// API 2) https://api.testvalley.kr/main-shortcut/all
// API 3) https://api.testvalley.kr/collections?prearrangedDiscount
// -> filter the data with type: "SINGLE" and viewType: "TILE"
const uri = import.meta.env.VITE_API_URL.toString()
  .replace(/\\/g, "")
  .replace(/"/g, "")
  .replace(/;/g, "");

class ApiCall {
  async getMainBanner() {
    try {
      const response = await axios.get(`${uri}/main-banner/all`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  async getMainShortcut() {
    try {
      const response = await axios.get(`${uri}/main-shortcut/all`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  async getCollections() {
    try {
      const response = await axios.get(
        `${uri}/collections?prearrangedDiscount`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
}

export default new ApiCall();
