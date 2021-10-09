import Axios from '../plugins/axios';

class Api {
    constructor() {
        this.instance = Axios;
        this.pendingRequests = {}
    }

    call({method, url}, data) {
        let request_key = `/${url}/${method}`;
        this.pendingRequests[request_key] = new Promise((resolve, reject) => {
            this.instance[method](`${url}`, data)
                .then(res => {
                    resolve(res);
                }).catch(err => {
                reject(err);
            }).finally(() => {
                delete this.pendingRequests[request_key];
            })
        })
        return this.pendingRequests[request_key];
    }

    get(url, data) {
        return this.call({method: 'get', url: url}, data)
    }

}

export default new Api();