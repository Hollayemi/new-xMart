import axios from 'axios';
import store from 'store';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // withCredentials: true,
});

// Request Interceptor
instance.interceptors.request.use(
    (config) => {
        const token = store.get('accesToken');
        if (typeof token !== 'undefined') {
            config.headers['Access-Token'] = `${token}`;
            config.headers['Authorization'] = `Bearer ${token}`;
            config.headers['Content-Type'] = 'application/json';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }
        config.headers['Content-Type'] = 'application/json';

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
