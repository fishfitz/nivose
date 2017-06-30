import axios from 'axios';

export default function({path, params, data, config}) {
    let [method, url] = path.split('_');

    if (params) {
        Object.entries(params).forEach(([name, value]) => {
            url = url.replace('$' + name, value);
        });
    }
    url = '/api/' + url.replace(/-/g, '/');

    return new Promise((resolve, reject) => {
        axios({method, url, data, config})
            .then(({data}) => resolve(data))
            .catch(err => reject(err));
    });
}
