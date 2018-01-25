const API_METHOD = 'GET';
const API_KEY = '94b1716df67d21bba7b4f1ba04cba8b5';
const API_URL = 'http://ws.audioscrobbler.com/2.0/';
const API_DATA_FORMAT = 'json';

//methods
export const ARTIST_SEARCH = 'artist.search';
export const ARTIST_GETINFO = 'artist.getInfo';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const options = {
    headers,
    method: API_METHOD
};

export const request = (method, data) => {
    return fetch(createEndPoint(method, data), options)
        .then(checkStatus)
        .then(response => response.json());
};

const checkStatus = (response) => {
    if (response.ok) {
        return response
    }
    const error = new Error(`${response.status} ${response.statusText}`);
    error.response = response;
    throw error
};

const createEndPoint = (method, data) => {
    let encodedParams = createParamsEncoder();
    //Adding base API parameters
    encodedParams
        .encode('api_key', API_KEY)
        .encode('format', API_DATA_FORMAT)
        .encode('method', method);
    //Adding method specific data
    Object.keys(data).forEach((name) => {
        encodedParams.encode(name, data[name]);
    });
    return `${API_URL}?${encodedParams()}`;
};

function createParamsEncoder() {
    let params = '';
    let encoder = function () {
        return params;
    };
    encoder.encode = function(name, value) {
        if (params.length > 0) {
            params += '&';
        }
        params += `${name}=${encodeURIComponent(value)}`;
        return this;
    };
    return encoder;
}