
import axios, { AxiosRequestConfig, Method } from 'axios';
import EnvErrorReporter from './envVariable';

export class FetchClient {
    
    // eslint-disable-next-line @typescript-eslint/ban-types
    public async fetchRequest(url: string, method: Method, data?: object) {
        const options: AxiosRequestConfig = {
            url: `${new EnvErrorReporter(process.env.BASE_URL, "Apibase url").apiKey}/${url}`,
            data,
            method,
            headers: {
                "X-API-Key": new EnvErrorReporter(process.env.API_KEY, "api key").apiKey
            },
        };
        const request = await axios(options);
        return request.data;
    }

      
    // eslint-disable-next-line @typescript-eslint/ban-types
    public async fetchGithub(url: string, method: Method, data?: object) {
        const options: AxiosRequestConfig = {
            url: `${new EnvErrorReporter(process.env.BASE_URL, "Apibase url").apiKey}/${url}`,
            data,
            method,
            headers: {
                "X-API-Key": new EnvErrorReporter(process.env.API_KEY, "api key").apiKey
            },
        };
        const request = await axios(options);
        return request.data;
    }
}

