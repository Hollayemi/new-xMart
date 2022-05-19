import axios from 'axios';

const AxiosBasedQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
    async ({ url, method, data }) => {
        try {
            url = baseUrl + url;
            const response = await axios({ url, method, data });
            return { data: response.data };
        } catch (error) {
            throw error;
        }
    };

export default AxiosBasedQuery;
