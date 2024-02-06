import axios from 'axios';
// API 1) https://api.testvalley.kr/main-banner/all
// API 2) https://api.testvalley.kr/main-shortcut/all
// API 3) https://api.testvalley.kr/collections?prearrangedDiscount
// -> filter the data with type: "SINGLE" and viewType: "TILE"

class ApiCall {
  async getMainBanner() {
    const response = await axios.get('https://api.testvalley.kr/main-banner/all');
    return response.data;
  }

  async getMainShortcut() {
    const response = await axios.get('https://api.testvalley.kr/main-shortcut/all');
    return response.data;
  }

  async getCollections() {
    const response = await axios.get('https://api.testvalley.kr/collections?prearrangedDiscount');
    return response.data;
  }
}

export default new ApiCall();