import axios, {Method} from 'axios';

const BASE_URL = 'http://localhost:4000'

export function callApi(endpoint: string, method: Method = 'GET', body?: any) {
    let caller = axios.create();

    return caller.request({
        url: `${BASE_URL}/${endpoint}`,
        method: method,
        data: body
    });
}

export async function callApiWithAdditionalHeader(endpoint: string, method: Method = 'GET', body?: any, headers?: any) {

    let caller = axios.create();

    return caller.request({
        url: `${BASE_URL}/${endpoint}`,
        method: method,
        data: body,
        headers: {
            ...headers
        }
    });
}