import * as request from "./requestService";

const url = 'http://localhost:3030/data/comments';

export const create = (postId, comment) =>
    request.post(url, { postId, text: comment });

export const getByPostId = (postId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`postId="${postId}"`);

    return request.get(`${url}?where=${search}&load=${relations}`);
}
