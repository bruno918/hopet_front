import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

//   api.interceptors.request.use((config) => {
//     if (config.headers) {
//       config.headers['x-api-auth'] = import.meta.env
//     }

//     return config
//   })

api.interceptors.response.use(
  (response) => {
    return response;
  }

  // (error) => {
  //   toast.error(error.response.data.userMessage)
  //   return Promise.reject(error)
  // },
);

export default api;
