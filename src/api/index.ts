import axios from "axios";

export const weatherApi = Object.freeze({
  async getCurrentRequest(endPoint: string | undefined) {
    try {
      const response = await axios.get(endPoint!);
      return response;
    } catch (err) {
      return err;
    }
  },
  async getHourlyRequest(endPoint: string | undefined) {
    try {
      const response = await axios.get(endPoint!);
      return response;
    } catch (err) {
      return err;
    }
  },
  async getAirRequest(endPoint: string | undefined) {
    try {
      const response = await axios.get(endPoint!);
      return response;
    } catch (err) {
      return err;
    }
  },
});
