import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createPost = (post, token) => {
    return fetch(`${API}/post`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};