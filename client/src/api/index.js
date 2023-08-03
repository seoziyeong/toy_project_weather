import axios from "axios";

export const weatherApi = Object.freeze({
  async getCurrentRequest(endPoint) {
    try {
      const response = await axios.get(endPoint);
      return response;
    } catch (err) {
      return err;
    }
  },
  async getHourlyRequest(endPoint) {
    try {
      const response = await axios.get(endPoint);
      return response;
    } catch (err) {
      return err;
    }
  },
  async getAirRequest(endPoint) {
    try {
      const response = await axios.get(endPoint);
      return response;
    } catch (err) {
      return err;
    }
  },
});
