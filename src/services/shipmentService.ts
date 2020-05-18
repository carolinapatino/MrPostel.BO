import { API_URL } from "./config";

export default {
  getShipments() {
    return API_URL.get(`/shipment`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTE4VDA5OjU3OjI3LjA5N1oiLCJleHAiOiIyMDIwLTA1LTE5VDA5OjU3OjI3LjEwMFoifQ.qDqFCKOcI0eCHe1GOu_A0LGZ4k6eVyJ6DaRuS5cgXHU`,
      },
    });
  },
};
