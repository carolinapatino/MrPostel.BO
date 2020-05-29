import { API_URL } from "./config";

export default {
  getShipments() {
    return API_URL.get(`/shipment`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDIwLTA1LTE5VDExOjM2OjEwLjIxOFoiLCJleHAiOiIyMDIwLTA1LTIwVDExOjM2OjEwLjIxOFoifQ.Yc_bG4cej29mz6BrLm9_s8QZZcC2sdqHhzxDwhcPfbI`,
      },
    });
  },
};
