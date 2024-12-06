import axios from "axios";


const BaseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

export const AxiosInstance = axios.create({
    baseURL: BaseUrl,
});
