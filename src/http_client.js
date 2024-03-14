import axios from "axios";

class HttpClient {
  constructor(baseURL, headers, basicAuthCredentials) {
    this.instance = axios.create({
      baseURL: baseURL,
      headers: headers,
      auth: basicAuthCredentials,
    });
  }

  static withBearerToken(baseURL, token) {
    const headers = {
      "Accept": "application/json",
      "Authorization": token ? `Bearer ${token}` : null,
    };

    return new HttpClient(baseURL, headers);
  }

  static withHTTPBasicAuthentication(baseURL, username, password) {
    const headers = {
      "Accept": "application/json",
    };

    let basicAuthCredentials = {
      username: username,
      password: password
    };

    return new HttpClient(baseURL, headers, basicAuthCredentials);
  }

  // Method to make a GET request
  async get(url, config = {}) {
    try {
      const response = await this.instance.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Method to make a POST request
  async post(url, data = {}, config = {}) {
    try {
      const response = await this.instance.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Method to make a PUT request
  async put(url, data = {}, config = {}) {
    try {
      const response = await this.instance.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Method to make a DELETE request
  async delete(url, config = {}) {
    try {
      const response = await this.instance.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default HttpClient;
