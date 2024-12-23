import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost:8080/api",
    headers:{
        "Content-Type" : "application/json",
    },
    withCredentials:true,
});

// apiClient.interceptors.request.use((config)=>{
//     if(config.data instanceof URLSearchParams){
//         config.headers["Content-Type"]="application/x-www-form-urlencoded";
//     }
//     return config;
// });

export default apiClient;