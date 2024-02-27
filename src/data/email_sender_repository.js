import HttpClient from "../http_client";

class EmailSenderRepository {
    constructor() {
        this.httpClient = new HttpClient('https://macabe.netlify.app/api', false);
    }

    // Method to send email for a new order
    async sendNewOrderEmail(clientName) {
        try {
            return await this.httpClient.post('/email', {name: clientName});
        } catch (error) {
            throw error;
        }
    }
}

export default EmailSenderRepository;
