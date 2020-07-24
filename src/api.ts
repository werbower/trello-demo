import { AppState } from './AppStateContext';

const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT || '';

export const save = (payload: AppState) => {

    return fetch(`${endpoint}/uni`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })
    .then((response) => {
        return response.json();
    })
    .catch(console.log);
}

export const load = () => {
    return fetch(`${endpoint}/uni`)
    .then((response) => {
        return response.json() as Promise<AppState>;
    });
}