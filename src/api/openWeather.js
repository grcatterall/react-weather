import axios from "axios";

const KEY = "7588197497b88774cc6a4140c8a60d67";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: KEY,
    units: 'metric'
  },
});
