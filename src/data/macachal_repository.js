import HttpClient from "../http_client";

const url = "https://macabe.netlify.app/api";

class MacachalRepository {
  constructor() {
    this.httpClient = new HttpClient(url);
  }

  // Method to create a new order
  async createOrder(orderData) {
    try {
      return await this.httpClient.post("/orders/new", orderData);
    } catch (error) {
      throw error;
    }
  }

  // Method to get all cities in Bulgaria
  async getEcontCitiesInBulgaria() {
    try {
      return await this.httpClient.get("/econt/cities?countryCode=BGR");
    } catch (error) {
      throw error;
    }
  }

  // Method to get all econt offices in Bulgaria by cityId
  async getEcontOfficesInBulgariaByCityId(cityId) {
    try {
      return await this.httpClient.get(`/econt/offices?countryCode=BGR&cityId=${cityId}`);
    } catch (error) {
      throw error;
    }
  }
}

export default MacachalRepository;
