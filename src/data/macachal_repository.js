import HttpClient from "../http_client";

const url = "https://macabe.netlify.app/api";

class MacachalRepository {
  constructor() {
    this.httpClient = new HttpClient(url, false);
  }

  // Method to create a new order
  async createOrder(orderData) {
    try {
      return await this.httpClient.post("/orders/new", orderData);
    } catch (error) {
      throw error;
    }
  }
}

export default MacachalRepository;
